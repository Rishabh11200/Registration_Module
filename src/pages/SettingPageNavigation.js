import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const settingStack = createNativeStackNavigator();

import Settings from '../screens/otherScreens/Settings';
import About from '../screens/otherScreens/Settings/about';
import Privacy from '../screens/otherScreens/Settings/privacy';

export default function settingsStack() {
  return (
    <settingStack.Navigator>
      <settingStack.Screen
        name="AnotherSettings"
        component={Settings}
        options={{headerShown: null, title: 'Settings'}}
      />
      <settingStack.Screen name="About" component={About} />
      <settingStack.Screen name="Privacy" component={Privacy} />
    </settingStack.Navigator>
  );
}
