import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/color';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from '../screens/otherScreens/Home';
import Profile from '../screens/otherScreens/Profile';
import Settings from '../screens/otherScreens/Settings';

const Tab = createMaterialBottomTabNavigator();
export function bottomTabNavigation() {
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarColor: Colors.paleGreen,
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon name={'ios-home'} color={Colors.vividCyan} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarColor: Colors.neonGreen,
        tabBarLabel: 'Settings',
        tabBarIcon: () => (
          <Icon name={'settings'} color={Colors.vividCyan} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarColor: Colors.lGreen,
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <Icon name={'ios-person'} color={Colors.vividCyan} size={24} />
        ),
      }}
    />
  </Tab.Navigator>;
}

// const bottomTabNavigation = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: {Home},
//       navigationOptions: {
//         tabBarLabel: 'Home',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
//           </View>
//         ),
//       },
//     },
//     Profile: {
//       screen: {Profile},
//       navigationOptions: {
//         tabBarLabel: 'Profile',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
//           </View>
//         ),
//         activeColor: '#f60c0d',
//         inactiveColor: '#f65a22',
//         barStyle: {backgroundColor: '#f69b31'},
//       },
//     },
//     Settings: {
//       screen: {Settings},
//       navigationOptions: {
//         tabBarLabel: 'Settings',
//         tabBarIcon: ({tintColor}) => (
//           <View>
//             <Icon style={[{color: tintColor}]} size={25} name={'settings'} />
//           </View>
//         ),
//         activeColor: '#f60c0d',
//         inactiveColor: '#f65a22',
//         barStyle: {backgroundColor: '#f69b31'},
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     activeColor: Colors.neonGreen,
//     inactiveColor: Colors.lGreen,
//     barStyle: {backgroundColor: Colors.cyan},
//   },
// );
