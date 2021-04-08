import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { HomeScreen } from "./Screens/HomeScreen";
import { SettingsScreen } from "./Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "#FFA07A",
            showLabel: true,
            labelStyle: {
              fontSize: 18,
              fontStyle: "italic",
            },

            style: {
              position: "absolute",
              height: 50,
              backgroundColor: "#F8F8F8",
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 0,
              marginHorizontal: 30,
              bottom: 10,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color="black" size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="cog" color="black" size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5F9EA0",
    justifyContent: "flex-end",
    marginBottom: "36",
  },
});

//http://www.omdbapi.com/?apikey=ec1ede79&t=Star+Wars&y=1977
