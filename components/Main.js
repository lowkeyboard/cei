import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../redux/actions/index';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from './main/Feed';
import ProfileScreen from './main/Profile';

const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return null;
};

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Tab.Navigator initialRouteName="Feed">
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen
          name="AddContainer"
          component={EmptyScreen}
          listeners={({navigation}) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate('Add');
            },
          })}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.userState.currentUser,
});
const mapDispatchProps = dispatch => bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
