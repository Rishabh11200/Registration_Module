import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NavigationOfAllScreens from './pages/NavigationOfAllScreens';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <NavigationOfAllScreens />;
};

export default App;
