import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import signIn from '../screens/authentication/signIn';

const Stack = createNativeStackNavigator();

const NavigationOfAllScreens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen name="signIn" component={signIn} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
