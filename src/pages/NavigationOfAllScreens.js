import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn';
import signUp from '../screens/authentication/signUp';

const NavigationOfAllScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="signIn" component={signIn} />
          <Stack.Screen name="signUp" component={signUp} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
