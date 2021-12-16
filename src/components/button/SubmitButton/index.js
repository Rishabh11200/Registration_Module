import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';
export default function ButtonField(props) {
  const Screen = screenDetails();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => props.func()}>
        <Icon style={styles.icon} name={props.icon} size={20} />
        <Text style={styles.text(Screen)}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
