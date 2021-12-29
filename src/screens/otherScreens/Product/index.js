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

const Product = () => {
  const screen = screenDetails();
  const rupee = '\u20B9';
  const renderItem = ({item}) => (
    <View style={styles.mainView(screen)}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.insideView}>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>
          {rupee}
          {item.price} /-
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container(screen)}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={data}
        renderItem={renderItem}
        key={screen.up ? 1 : 2}
        numColumns={screen.up ? 2 : 3}
        keyExtractor={(item, index) => `key-${index}`}
      />
    </SafeAreaView>
  );
};

export default Product;
