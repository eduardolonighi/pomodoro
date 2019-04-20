import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class ResetButton extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  resetText: {
    fontSize: 45,
    color: "#3f2d20ff",
    borderWidth: 3,
    borderColor: "#3f2d20ff",
    borderRadius: 10,
    marginBottom: 80,
    padding: 10
  }
});
