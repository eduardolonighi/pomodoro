import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Counter extends Component {
  showPauseMesage = () => {
    if (this.props.paused)
      return <Text style={{ color: "#3f2d20ff" }}>Tap Anywhere to Resume</Text>;

    return <Text style={{ color: "#3f2d20ff" }}>Tap Anywhere to Pause</Text>;
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Text style={styles.counterText}>
          {this.props.minutes}:{this.props.seconds}
        </Text>
        {this.showPauseMesage()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  counterText: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#3f2d20ff"
  }
});
