import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Colors from '../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from '../screens/otherScreens/Home';
// import HomeStack from './HomePageStack';
import Cart from '../screens/otherScreens/Cart';
import Product from '../screens/otherScreens/Product';
import Order from '../screens/otherScreens/Order';

const drawer = createDrawerNavigator();
export default function Drawer() {
  return (
    <drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: Colors.lGreen,
        drawerActiveTintColor: Colors.black,
        drawerInactiveTintColor: Colors.darkBlue,
        drawerLabelStyle: {
          fontSize: 20,
          marginLeft: -25,
        },
      }}>
      <drawer.Screen
        name="MainHome"
        component={Home}
        options={{
          drawerIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          title: 'Home',
        }}
      />
      <drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerIcon: ({color}) => (
            <Entypo name="list" color={color} size={24} />
          ),
        }}
      />
      <drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({color}) => (
            <Feather name="shopping-cart" color={color} size={24} />
          ),
        }}
      />
      <drawer.Screen
        name="Order"
        component={Order}
        options={{
          drawerIcon: ({color}) => (
            <Entypo name="add-to-list" color={color} size={24} />
          ),
        }}
      />
    </drawer.Navigator>
  );
}

function CustomDrawerContent(props) {
  const navigation = useNavigation();
  async function onLogout() {
    navigation.reset({
      index: 0,
      routes: [{name: 'signIn'}],
    });
    await AsyncStorage.removeItem('@isSignedIn');
  }
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>Registration</Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft: 5,
            marginRight: 5,
          }}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logout} onPress={onLogout}>
        <MaterialCommunityIcons
          name="exit-run"
          color={Colors.black}
          size={25}
        />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    color: Colors.black,
    padding: '3%',
    fontWeight: '800',
  },
  logout: {
    marginBottom: 40,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    color: Colors.black,
    fontWeight: '600',
  },
});
