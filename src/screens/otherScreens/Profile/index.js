import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';

const Profile = () => {
  const screen = screenDetails();
  return (
    <SafeAreaView style={styles.container(screen)}>
      <View style={styles.center}>
        <Text style={styles.text}>
          Hey, further things will be added soon... Profile
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
