import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screens/otherScreens/Home';
import Profile from '../screens/otherScreens/Profile';
import Settings from '../screens/otherScreens/Settings';

const Tab = createMaterialBottomTabNavigator();
const bottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home')
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          else if (route.name === 'Profile')
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          else if (route.name === 'Settings')
            iconName = focused ? 'settings' : 'settings-outline';
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarColor: 'blue'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarColor: 'black'}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarColor: 'green'}}
      />
    </Tab.Navigator>
  );
};
export default bottomTabNavigation;
