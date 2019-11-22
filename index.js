import React, { Component } from "react";
import { Stylesheet, Text, View } from "react-native";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Timer Component </Text>
      </View>
    );
  }
}

const style = Stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
