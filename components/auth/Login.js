import React, {Component} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onSignIn = this.onSignIn.bind(this);
  }

  onSignIn() {
    const {email, password, name} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#212530',
        }}>
        <Text style={styles.text0}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity style={styles.button} onPress={() => this.onSignIn()}>
          <Text style={{textAlign: 'center', color: '#FFFFFF'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    textAlign: 'center',
    marginTop: 20,
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
  },
  text0: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'monospace',
    fontSize: 30,
    fontWeight: 'bold',
  },

  button: {
    flexDirection: 'column',
    alignSelf: 'center',
    margin: 15,
    backgroundColor: '#2D9CDB',
    padding: 10,
    borderRadius: 16,
    width: 150,
    width: 327,
    height: 48,
  },
});
