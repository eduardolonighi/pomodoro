import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SettingsButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Ionicons name={"md-arrow-round-back"} size={45} color="#3f2d20ff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});
