import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text, StyleSheet, View } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text size="20">asda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#191970",
  },
  /*
  searchStyles: {

  },

  listItem: {},*/
});

//https://wix.github.io/react-native-navigation/docs/functionalComponents/
