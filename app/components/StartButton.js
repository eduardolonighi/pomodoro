import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

export default class StartButton extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/tomato-pngrepo-com.png")}
          />
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
  }
});
