import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn/';
import signUp from '../screens/authentication/signUp/';
import forgot1 from '../screens/authentication/forgot/forgot1';
import forgot2 from '../screens/authentication/forgot/forgot2';
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
        <Stack.Screen
          name="forgot1"
          component={forgot1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgot2"
          component={forgot2}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
