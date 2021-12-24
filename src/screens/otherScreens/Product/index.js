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
  const renderItem = ({item}) => (
    <View style={styles.mainView}>
      <Image style={styles.image} source={{uri: item.url}} />

      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  const screen = screenDetails();
  return (
    <SafeAreaView style={styles.container(screen)}>
      <FlatList
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
