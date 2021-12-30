import React from 'react';
import {SafeAreaView, Text, View, FlatList, Image} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles';
import {data} from '../../../constants/dummyData';

const Order = () => {
  const screen = screenDetails();
  const rupee = '\u20B9';
  const renderItem = ({item}) => (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 10,
      }}>
      <View>
        <Image style={styles.image(screen)} source={{uri: item.url}} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={styles.title}> {item.title} </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'green'}}>{item.details}</Text>
        </View>
        <Text style={{color: 'red'}}>
          {rupee} {item.price} /-
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container(screen)}>
      <FlatList
        style={{flex: 1}}
        data={data}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item, index) => `key-${index}`}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Total products: 10</Text>
        <Text style={styles.text}>Total price: {rupee}1000/-</Text>
      </View>
    </SafeAreaView>
  );
};

export default Order;
