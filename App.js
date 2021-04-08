import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import BottomNav from "./BottomNav";

export default class App extends React.Component {
  render() {
    return <BottomNav style={styles.backgroundColor}></BottomNav>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5F9EA0",
  },
});
