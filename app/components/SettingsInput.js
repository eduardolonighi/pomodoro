import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";

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
    if (!this.state.workTime) this.setState({ workTime: "0" });
    if (!this.state.breakTime) this.setState({ breakTime: "0" });
  };

  handleSubmit = () => {
    this.props.handler(this.state);
  };

  max60 = number => {
    if (number > 59) return 60;
    return number;
  };

  //TODO: back button that fires handleSubmit
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          onFocus={() => this.setState({ workTime: "" })}
          value={this.state.workTime}
          onChangeText={text => this.workTimeHandler(text)}
          onEndEditing={() => this.handleEmpty()}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          maxLength={2}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 90,
    borderWidth: 3,
    borderRadius: 25,
    borderColor: "gray",
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    color: "#EF5350"
  }
});
