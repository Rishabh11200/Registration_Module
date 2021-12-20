import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Home from '../screens/otherScreens/Home';
import Profile from '../screens/otherScreens/Profile';
import Settings from '../screens/otherScreens/Settings';

const bottomTabNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: {Home},
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: {Profile},
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
    Settings: {
      screen: {Settings},
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'settings'} />
          </View>
        ),
        activeColor: '#f60c0d',
        inactiveColor: '#f65a22',
        barStyle: {backgroundColor: '#f69b31'},
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: Colors.neonGreen,
    inactiveColor: Colors.lGreen,
    barStyle: {backgroundColor: Colors.cyan},
  },
);
