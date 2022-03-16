import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/color';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Drawer from './drawer';
import SettingsStack from './SettingPageNavigation';
import Profile from '../screens/otherScreens/Profile';

const All = ({route}) => {
  // const {from} = route.params;
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      // initialRouteName={from === 'signup' ? 'Profile' : 'Home'}
    >
      <Tab.Screen
        name="Home"
        component={Drawer}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation}) {
  const styles = StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 5,
      backgroundColor: Colors.lGreen,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    activeTabButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      width: 60,
      borderRadius: 30,
      marginBottom: 10,
      elevation: 10,
      backgroundColor: Colors.xCyan,
    },
  });
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon = {
          Home: 'home',
          Settings: 'setting',
          Profile: 'profile',
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {!isFocused ? (
                <Icon name={icon[label]} color={'black'} size={25} />
              ) : (
                <View style={styles.activeTabButton}>
                  <Icon
                    name={icon[label]}
                    color={isFocused ? 'cyan' : 'black'}
                    size={25}
                  />
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default All;
