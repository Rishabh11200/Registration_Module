import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import signIn from '../screens/authentication/signIn/';
import signUp from '../screens/authentication/signUp/';
import forgot1 from '../screens/authentication/forgot/forgot1';
import forgot2 from '../screens/authentication/forgot/forgot2';
import all from './bottomTabNavigation';
import SingleItem from '../screens/otherScreens/Home/singleItem';
// import Drawer from './drawer';

const NavigationOfAllScreens = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.isCheck === '"yes"' ? 'all' : 'signIn'}>
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
          component={all}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingleItem"
          component={SingleItem}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationOfAllScreens;
