import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

export default class StartButton extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.touchable} onPress={this.props.onPress}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/tomato-pngrepo-com.png")}
          />
          <Text style={styles.text}>Touch to Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  touchable: {
    alignItems: "center"
  },
  text: {
    color: "#3f2d20ff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5
  }
});
