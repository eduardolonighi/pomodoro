import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

const PausedIcon = () => (
  <View style={styles.container}>
    <Image
      source={require("../assets/pause-128.png")}
      style={{
        width: 100,
        height: 100
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PausedIcon;
