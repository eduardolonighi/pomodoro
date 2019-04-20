import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MainComponent } from "./app/components";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
