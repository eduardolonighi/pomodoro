import React, { Component } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

import SettingsBackButton from "./SettingsBackButton";

export default class SettingsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: Math.floor(this.props.breakTime / 60).toString(),
      workTime: Math.floor(this.props.workTime / 60).toString()
    };
  }
  workTimeHandler = text => {
    let worktime = this.max60(text).toString();
    this.setState({ workTime: worktime });
  };

  breakTimeHandler = text => {
    let breakTime = this.max60(text).toString();
    this.setState({ breakTime: breakTime });
  };

  handleEmpty = () => {
    if (this.state.workTime.length < 1) this.setState({ workTime: "0" });
    if (this.state.breakTime.length < 1) this.setState({ breakTime: "0" });
  };

  handleSubmit = () => {
    let newState = this.state;
    if (!newState.workTime) newState.workTime = "0";
    if (!newState.breakTime) newState.breakTime = "0";

    this.props.handler(newState);
  };

  max60 = number => {
    if (parseInt(number) > 59) return 60;
    return number;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ ...styles.inputView, alignItems: "flex-end" }}>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onFocus={() => this.setState({ workTime: "" })}
              value={this.state.workTime}
              onChangeText={text => this.workTimeHandler(text)}
              onEndEditing={() => this.handleEmpty()}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              maxLength={2}
            />
            <Text style={styles.text}>Work</Text>
          </View>
        </View>
        <View style={{ ...styles.inputView, alignItems: "flex-start" }}>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onFocus={() => this.setState({ breakTime: "" })}
              value={this.state.breakTime}
              onChangeText={text => this.breakTimeHandler(text)}
              onEndEditing={() => this.handleEmpty()}
              maxLength={2}
              ref={input => {
                this.secondTextInput = input;
              }}
              onSubmitEditing={() => this.handleSubmit()}
            />
            <Text style={styles.text}>Break</Text>
          </View>
        </View>
        <SettingsBackButton onPress={() => this.handleSubmit()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  inputView: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    width: 90,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#3f2d20ff",
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    color: "#3f2d20ff"
  },
  text: {
    color: "#3f2d20ff",
    fontSize: 30
  }
});
