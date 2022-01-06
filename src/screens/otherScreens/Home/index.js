import React, {useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles';
import CarouselScreen from '../../../components/carousel';
import {data} from '../../../constants/dummyData';

const Home = ({navigation}) => {
  const screen = screenDetails();
  const onPressSingleItem = useCallback(item => {
    navigation.navigate('SingleItem', {
      data: item,
      name: item.title,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={data}
        key={screen.up ? 1 : 2}
        numColumns={screen.up ? 2 : 3}
        keyExtractor={(item, index) => `key-${index}`}
        ListHeaderComponent={() => <CarouselScreen />}
        renderItem={({item}) => {
          return (
            <Pressable
              onPress={() => {
                onPressSingleItem(item);
              }}>
              <View style={styles.view(screen)}>
                <Image style={styles.image} source={{uri: item.url}} />
                <View style={styles.insideImage}>
                  <Text style={styles.text(screen)}>{item.title}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
