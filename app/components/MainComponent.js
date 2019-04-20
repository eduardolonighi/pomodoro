import React, { Component } from "react";
import { StyleSheet, View, BackHandler } from "react-native";

import { timeFormat, vibrate } from "../utils";

import Counter from "./Counter";
import StartButton from "./StartButton";
import ResetButton from "./ResetButton";
import PausedIcon from "./PausedIcon";
import SettingsButton from "./SettingsButton";
import SettingsInput from "./SettingsInput";

import {
  STOPED,
  RUNING,
  PAUSED,
  WORK,
  BREAK,
  SETTINGS
} from "../constants/constants";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: WORK,
      workTimer: 1500, //1500 seconds = 25 min
      breakTimer: 300, //300 seconds = 5 min
      remaining: 0,
      intervalId: null,
      timerState: STOPED
    };
    this.settingsHandler = this.settingsHandler.bind(this);
  }

  componentWillMount() {
    //TODO: load settings from asyncStorage
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    if (this.state.timerState === RUNING) {
      this.stop();
      return true;
    }
    if (
      this.state.timerState === PAUSED ||
      this.state.timerState === SETTINGS
    ) {
      this.stop();
      return true;
    }

    if (this.state.timerState === STOPED) BackHandler.exitApp();

    return true;
  };

  run = () => {
    if (this.state.timerState === STOPED)
      this.setState({ remaining: this.state.workTimer, timer: WORK });

    this.setState({ timerState: RUNING });

    let intervalId = setInterval(() => {
      let remaining = this.state.remaining - 1;
      this.setState({ remaining: remaining });
      if (this.state.remaining <= 0) {
        // vibrate();
        if (this.state.timer === WORK) {
          this.setState({ timer: BREAK, remaining: this.state.breakTimer });
        } else {
          this.setState({ timer: WORK, remaining: this.state.workTimer });
        }
      }
    }, 1000);

    this.setState({ intervalId: intervalId });
  };

  pause = () => {
    this.setState({ timerState: PAUSED });
    clearInterval(this.state.intervalId);
  };

  stop = () => {
    this.setState({ timerState: STOPED });
    clearInterval(this.state.intervalId);
  };

  toggleSettings = () => {
    if (this.state.timer != SETTINGS) {
      this.setState({ timerState: SETTINGS });
    } else {
      this.setState({ timerState: STOPED });
    }
  };

  settingsHandler = newState => {
    console.log(newState);
    this.setState({
      workTimer: parseInt(newState.workTime) * 60,
      breakTimer: parseInt(newState.breakTime) * 60
    });
    this.setState({ timerState: STOPED });
    //TODO: save settings on asynstorage
  };

  backgroundColor = () => {
    if (this.state.timerState === STOPED || this.state.timerState === SETTINGS)
      // return { backgroundColor: "#fff" };
      return { backgroundColor: "#00E676" };
    if (this.state.timer === WORK) return { backgroundColor: "#00E676" };
    if (this.state.timer === BREAK) return { backgroundColor: "#EF5350" };
  };

  //navigation
  renderTimer = () => {
    let remaining = timeFormat(this.state.remaining);
    // console.log(remaining);
    switch (this.state.timerState) {
      case RUNING:
        return (
          <Counter
            onPress={() => this.pause()}
            minutes={remaining.minutes}
            seconds={remaining.seconds}
          />
        );
      case STOPED:
        return (
          <View style={styles.container}>
            <StartButton onPress={() => this.run()} />
            <SettingsButton onPress={() => this.toggleSettings()} />
          </View>
        );
      case PAUSED:
        return (
          <View style={styles.container}>
            <PausedIcon />
            <Counter
              onPress={() => this.run()}
              minutes={remaining.minutes}
              seconds={remaining.seconds}
            />
            <ResetButton onPress={() => this.stop()} />
          </View>
        );
      case SETTINGS:
        return (
          <SettingsInput
            breakTime={this.state.breakTimer}
            workTime={this.state.workTimer}
            handler={this.settingsHandler}
          />
        );
      default:
        return null;
    }
  };

  render() {
    let background = this.backgroundColor();
    return (
      <View style={{ ...styles.container, ...background }}>
        {this.renderTimer()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center"
  }
});
