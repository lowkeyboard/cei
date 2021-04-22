import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

export default function Landing({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#212530',
      }}>
      <View>
        <Text style={styles.text0}>Welcome!</Text>
      </View>
      <Image style={styles.container} source={require('../src/dino.png')} />

      <TouchableOpacity
        style={styles.logbutton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text1}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.regbutton}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text2}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    opacity: 1,
  },

  logbutton: {
    flexDirection: 'column',
    alignSelf: 'center',

    backgroundColor: '#2D9CDB',
    padding: 10,
    borderRadius: 16,
    // marginRight: 24,
    //marginLeft: 24,
    width: 327,
    height: 48,
  },
  regbutton: {
    flexDirection: 'column',
    alignSelf: 'center',

    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 16,
    marginTop: 20,
    // marginRight: 24,
    //marginLeft: 24,
    // marginBottom: 25,
    width: 327,
    height: 48,
    textAlign: 'center',
  },

  text0: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 30,
    fontWeight: 'bold',
  },

  text1: {
    textAlign: 'center',
    color: '#FFFFFF',
  },

  text2: {
    textAlign: 'center',
    color: 'black',
  },
});
