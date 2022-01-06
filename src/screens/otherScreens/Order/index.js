import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';
import {orderData} from '../../../constants/orderData';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Order = () => {
  const [tap, settap] = useState(false);
  const [data, setdata] = useState('');
  const screen = screenDetails();
  const rupee = '\u20B9';
  const separator = () => {
    return (
      <View
        style={{
          margin: 10,
          height: 1,
          width: '100%',
          backgroundColor: Colors.black,
        }}
      />
    );
  };
  const footer = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{marginTop: 10}}>No more orders.</Text>
      </View>
    );
  };
  function onSingleItem(item) {
    setdata(item);
    settap(true);
  }
  return (
    <SafeAreaView style={styles.container(screen)}>
      <Modal
        animationType="fade"
        visible={tap}
        transparent={true}
        onRequestClose={() => {
          settap(false);
        }}>
        <View style={styles.view}>
          <View style={styles.modalView}>
            <Text style={[styles.title, {textDecorationLine: 'underline'}]}>
              Order Details
            </Text>
            <View style={styles.rowView}>
              <Text style={styles.text}>Order id: {data.id}</Text>
              <Text style={[styles.text, {marginLeft: 20}]}>{data.title}</Text>
            </View>
            <Text style={styles.text}>Total Quantity: {data.products}</Text>
            <Text style={styles.text}>Items: {data.details}</Text>
            <Text style={styles.text}>
              Price: {rupee}
              {data.total} /- ({data.subP})
            </Text>
            <View style={styles.centerView}>
              <Text onPress={() => settap(false)} style={styles.closeText}>
                Close
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        style={{flex: 1}}
        data={orderData}
        renderItem={({item}) => (
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
              <Text style={styles.title}>Order No. {item.id}</Text>
              <Text style={styles.text}>{item.title} </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: 'green'}}>
                  Total products: {item.products}
                </Text>
              </View>
              <Text style={{color: 'red'}}>
                Total value: {rupee} {item.total} /-
              </Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="navigate-next"
                size={24}
                color={Colors.black}
                onPress={() => {
                  onSingleItem(item);
                }}
              />
            </TouchableOpacity>
          </View>
        )}
        numColumns={1}
        keyExtractor={(item, index) => `key-${index}`}
        ItemSeparatorComponent={() => separator()}
        ListFooterComponent={() => footer()}
      />
      {/* <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Total products: 10</Text>
        <Text style={styles.text}>Total price: {rupee}1000/-</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default Order;
