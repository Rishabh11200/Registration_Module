import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Profile from '../screens/otherScreens/Profile';
// import Home from '../screens/otherScreens/Home';
import Drawer from './drawer';
// import HomeStack from './HomePageStack';
import settingsStack from './SettingPageNavigation';
import HomeStack from './HomePageStack';

const Tab = createMaterialBottomTabNavigator();
const bottomTabNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      // initialRouteName="Home"
      tabBar={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 5,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color}) => {
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
        component={Drawer}
        options={{tabBarColor: Colors.cyan}}
      />
      <Tab.Screen
        name="Settings"
        component={settingsStack}
        options={{tabBarColor: Colors.xCyan}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarColor: Colors.darkCyan, headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default bottomTabNavigation;
