import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import Colors from '../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StackActions} from '@react-navigation/native';

import Home from '../screens/otherScreens/Home';
import Cart from '../screens/otherScreens/Cart';
import Product from '../screens/otherScreens/Product';
import Order from '../screens/otherScreens/Order';

const drawer = createDrawerNavigator();
export default function Drawer(props) {
  return (
    <drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: Colors.babyBlue,
        drawerActiveTintColor: Colors.shadeBlue,
        drawerInactiveTintColor: Colors.black,
        drawerLabelStyle: {
          //   marginLeft: -20,
          fontSize: 18,
        },
      }}>
      <drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />
      <drawer.Screen
        name="Product"
        component={Product}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="ios-albums" color={color} size={24} />
          ),
        }}
      />
      <drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({color}) => <Icon name="cart" color={color} size={24} />,
        }}
      />
      <drawer.Screen
        name="Order"
        component={Order}
        options={{
          drawerIcon: ({color}) => (
            <Icon name="reorder-four-sharp" color={color} size={24} />
          ),
        }}
      />
    </drawer.Navigator>
  );
}

function CustomDrawer(props) {
  async function onLogout() {
    navigation.dispatch(StackActions.popToTop());
    await set('isSignedIn', 'false');
  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logout} onPress={onLogout}>
        <Icon name="exit" color={Colors.shadeBlue} size={25} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
    color: Colors.lightblue,
    fontWeight: '600',
  },
});
