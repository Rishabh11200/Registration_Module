import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/color';

const homeStack = createNativeStackNavigator();

import Home from '../screens/otherScreens/Home';
// import Drawer from './drawer';

export default function HomeStack({navigation}) {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        name="insideHome"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialIcons
                name="view-sidebar"
                color={Colors.black}
                size={30}
              />
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </homeStack.Navigator>
  );
}
