import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Profile from '../screens/otherScreens/Profile';
import Drawer from './drawer';
import settingsStack from './SettingPageNavigation';

const Tab = createMaterialBottomTabNavigator();
const bottomTabNavigation = () => {
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Home"
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
        options={{tabBarColor: Colors.darkCyan}}
      />
    </Tab.Navigator>
  );
};
export default bottomTabNavigation;
