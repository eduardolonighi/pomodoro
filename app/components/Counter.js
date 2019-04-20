import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Counter extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.counterContainer}
      >
        <Text style={{ fontSize: 100, fontWeight: "bold" }}>
          {this.props.minutes}:{this.props.seconds}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
