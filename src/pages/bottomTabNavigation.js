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
      shifting={true}
      tabBar={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home')
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          else if (route.name === 'Profile')
            iconName = focused ? 'ios-people' : 'ios-people-outline';
          else if (route.name === 'Settings')
            iconName = focused ? 'settings' : 'settings-outline';
          return <Icon name={iconName} size={24} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarColor: Colors.cyan}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarColor: Colors.darkCyan}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{tabBarColor: Colors.xCyan}}
      />
    </Tab.Navigator>
  );
};
export default bottomTabNavigation;
