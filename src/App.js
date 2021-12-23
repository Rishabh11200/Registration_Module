import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NavigationOfAllScreens from './pages/NavigationOfAllScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [check, setisCheck] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
    AsyncStorage.getItem('@isSignedIn').then(value => {
      if (value) {
        setisCheck(value);
        console.log('db: ', value);
      }
    });
  }, []);
  console.log('after: ', check);
  return <NavigationOfAllScreens isCheck={check} />;
};

export default App;
