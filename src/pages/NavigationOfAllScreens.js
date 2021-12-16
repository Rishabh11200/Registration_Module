import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn/';
import signUp from '../screens/authentication/signUp/';
import Home from '../screens/otherScreens/Home';

const NavigationOfAllScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signIn"
          component={signIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUp"
          component={signUp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
