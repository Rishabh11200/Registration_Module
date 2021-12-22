import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const settingStack = createNativeStackNavigator();

import Settings from '../screens/otherScreens/Settings';

export default function settingsStack() {
  return (
    <settingStack.Navigator>
      <settingStack.Screen
        name="AnotherSettings"
        component={Settings}
        options={{headerLeft: null, title: 'Settings'}}
      />
    </settingStack.Navigator>
  );
}
