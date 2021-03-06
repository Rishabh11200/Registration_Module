import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignIn from '../screens/authentication/signIn/';
import SignUp from '../screens/authentication/signUp/';
import Forgot1 from '../screens/authentication/forgot/forgot1';
import Forgot2 from '../screens/authentication/forgot/forgot2';
import All from './bottomTabNavigation';
import SingleItem from '../screens/otherScreens/Home/singleItem';
// import Drawer from './drawer';

const NavigationOfAllScreens = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.isCheck === '"yes"' ? 'all' : 'signIn'}>
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgot1"
          component={Forgot1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgot2"
          component={Forgot2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="all"
          component={All}
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
