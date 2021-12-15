import {launchCamera, launchImageLibrary} from 'react-native-image-picker/src';
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Modal,
  Image,
} from 'react-native';
import Colors from '../../constants/color';

export default function ImageSelection(props) {
  const [ResourceUri, setResourceUri] = useState('');
  const [isModalVisible, setisModalVisible] = useState(false);
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
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {   }}>
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
          onPress={() => {
            setisModalVisible(true);
          }}
          style={styles.imageView}>
          {ResourceUri != '' ? (
            <Image source={{uri: ResourceUri}} style={styles.imageView} />
          ) : (
            <Text style={styles.buttonText}>Select File</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    marginTop: 10,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderRadius: 100,
    margin: 20,
    height: 200,
    width: 200,
    borderColor: 'black',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    padding: '10%',
    margin: 20,
    borderRadius: 45,
    backgroundColor: Colors.white,
    shadowColor: Colors.babyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: Colors.black,
  },
  button: {
    marginTop: 30,
    padding: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.shadeBlue,
    borderRadius: 90,
  },
  closeText: {
    marginTop: 10,
    color: Colors.black,
  },
});
