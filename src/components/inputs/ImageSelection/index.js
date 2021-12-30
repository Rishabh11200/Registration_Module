import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import React, {useState} from 'react';
import {TouchableOpacity, View, Text, Modal, Image} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../../../constants/color';

import styles from './styles';

export default function ImageSelection(props) {
  const screen = screenDetails();
  const [ResourceUri, setResourceUri] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);
  let propsImage = props.image;
  let iconVisible = props.visible;

  const fromGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: false,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setResourceUri(response.assets[0]['uri']);
      }
    });
    setisModalVisible(false);
  };
  const fromCamera = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: false,
    };

    launchCamera(options, response => {
      console.log(response.assets[0]['uri']);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setResourceUri(response.assets[0]['uri']);
      }
    });
    setisModalVisible(false);
  };
  function onChange() {
    setisModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {}}>
        <View style={styles.view}>
          <View style={styles.centered}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => fromGallery()}>
              <Text style={{color: 'white'}}>Choose from Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => fromCamera()}>
              <Text style={{color: 'white'}}>Choose from Camera</Text>
            </TouchableOpacity>
            <Text
              onPress={() => setisModalVisible(false)}
              style={styles.closeText}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
      <View>
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => onChange()}
          style={styles.imageView}>
          {ResourceUri != '' ? (
            <Image source={{uri: ResourceUri}} style={styles.imageView} />
          ) : propsImage ? (
            <View>
              <Image
                source={require('../../../assets/carousel/scene1.jpg')}
                style={styles.imageView}
              />
              {iconVisible && (
                <Icon
                  name="edit"
                  style={styles.icon}
                  size={24}
                  color={Colors.black}
                />
              )}
            </View>
          ) : (
            <Text style={styles.buttonText(screen)}>Profile pic</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
