import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
  FlatList,
  Image,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';
import {data} from '../../../constants/dummyData';

const Cart = () => {
  const screen = screenDetails();
  const rupee = '\u20B9';
  const renderItem = ({item}) => (
    <View style={styles.cardView(screen)}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image(screen)} source={{uri: item.url}} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>
            {rupee}
            {item.price} /-
          </Text>
          <Text style={styles.title}>Quantity: {item.cart}</Text>
        </View>
      </View>
      <Text style={styles.text}>{item.details}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container(screen)}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item, index) => `key-${index}`}
      />
    </SafeAreaView>
  );
};

export default Cart;
