import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationOfAllScreens from './pages/NavigationOfAllScreens';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [check, setisCheck] = useState('');

  const [dbCheck, setdbCheck] = useState(false);

  function dbCall() {
    AsyncStorage.getItem('@isSignedIn').then(value => {
      if (value) {
        setisCheck(value);
      }
      setdbCheck(true);
      SplashScreen.hide();
    });
  }
  useEffect(() => {
    dbCall();
  }, []);

  return dbCheck ? <NavigationOfAllScreens isCheck={String(check)} /> : null;
};

export default App;
