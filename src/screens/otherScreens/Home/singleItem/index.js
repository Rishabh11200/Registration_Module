import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import screenDetails from '../../../../constants/screenDetails';
import styles from './styles';

const SingleItem = ({route}) => {
  const screen = screenDetails();
  const {data} = route.params;
  const rupee = '\u20B9';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Image style={styles.image(screen)} source={{uri: data.url}} />
        <Text style={styles.title(screen)}>{data.title} </Text>
        <Text style={styles.text(screen)}>{data.details}</Text>
        <Text style={styles.price}>
          {rupee}
          {data.price} /-
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SingleItem;
