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
import CarouselScreen from '../../../components/carousel';
import {data} from '../../../constants/dummyData';

const Home = () => {  
  const screen = screenDetails();
  return (
    <SafeAreaView style={styles.container(screen)}>
      <FlatList
        data={data}
        key={screen.up ? 1 : 2}
        numColumns={screen.up ? 2 : 3}
        keyExtractor={(item, index) => `key-${index}`}
        ListHeaderComponent={() => <CarouselScreen />}
        renderItem={({item}) => {
          return (
            <View style={styles.view}>
              <Image style={styles.image} source={{uri: item.url}} />
              <View style={styles.insideImage}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
