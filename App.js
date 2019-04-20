import React from "react";
import { StyleSheet, View } from "react-native";

import MainComponent from "./app/components/MainComponent";

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
