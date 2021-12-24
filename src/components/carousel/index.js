import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import styles from './styles';
import Colors from '../../constants/color';
import screenDetails from '../../constants/screenDetails';
import {SliderBox} from 'react-native-image-slider-box';

const data = [
  require('../../assets/carousel/scene1.jpg'),
  require('../../assets/carousel/scene2.jpg'),
  require('../../assets/carousel/scene3.jpg'),
  require('../../assets/carousel/scene4.jpg'),
  require('../../assets/carousel/scene5.jpg'),
  require('../../assets/carousel/scene6.jpg'),
];

const CarouselScreen = () => {
  const screen = screenDetails();
  const [height, setheight] = useState(screen.height);
  const [width, setwidth] = useState(screen.width);
  onLayout = e => {
    setheight(screen.height);
    setwidth(screen.width);
  };
  return (
    <View style={styles.container} onLayout={() => onLayout()}>
      <SliderBox
        images={data}
        sliderBoxHeight={300}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        // currentImageEmitter={index => console.warn(`image ${index} pressed`)}
        dotColor={Colors.shadeBlue}
        inactiveDotColor={Colors.grey}
        autoplay
        circleLoop
        ImageComponentStyle={{borderRadius: 10, width: '90%'}}
        imageLoadingColor={Colors.cyan}
        paginationBoxVerticalPadding={10}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          padding: 0,
          margin: 0,
          backgroundColor: 'rgba(128, 128, 128, 0.92)',
        }}
      />
    </View>
  );
};

export default CarouselScreen;
