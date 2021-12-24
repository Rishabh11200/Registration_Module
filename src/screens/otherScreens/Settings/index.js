import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';
import About from './about';

const Settings = ({navigation}) => {
  const screen = screenDetails();
  return (
    <SafeAreaView style={styles.container(screen)}>
      <View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.navigate('Privacy');
          }}>
          <FontAwesome5 name="user-shield" color={Colors.black} size={25} />
          <Text style={styles.appButtonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.navigate('About');
          }}>
          <MaterialCommunityIcons
            name="information-variant"
            color={Colors.black}
            size={30}
          />
          <Text style={styles.appButtonText}>About Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
