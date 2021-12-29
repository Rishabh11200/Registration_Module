import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn/';
import signUp from '../screens/authentication/signUp/';
import forgot1 from '../screens/authentication/forgot/forgot1';
import forgot2 from '../screens/authentication/forgot/forgot2';
import bottomTabNavigation from './bottomTabNavigation';

const NavigationOfAllScreens = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.isCheck === '"no"' ? 'signIn' : 'all'}>
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
        <Stack.Screen
          name="all"
          component={bottomTabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
