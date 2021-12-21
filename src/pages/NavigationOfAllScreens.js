import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn/';
import signUp from '../screens/authentication/signUp/';
import forgot1 from '../screens/authentication/forgot/forgot1';
import forgot2 from '../screens/authentication/forgot/forgot2';
import bottomTabNavigation from './bottomTabNavigation';

const NavigationOfAllScreens = () => {
  const [isSignedIn, setisSignedIn] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('isSignedIn').then(value => {
      if (value) {
        setisSignedIn(value);
      }
    });
  }, []);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="combinedPages"
              component={bottomTabNavigation}
              options={{headerShown: false, title: 'Home'}}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
