import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import screenDetails from '../../../constants/screenDetails';
import {isEmailCheck} from '../../../constants/validations';

export default function EmailInputText(props) {
  const Screen = screenDetails();

  return (
    <View style={styles.container}>
      <MaterialIcon style={styles.icon} name="email" size={20} />
      <TextInput
        style={styles.insideTextInput}
        placeholder={props.name}
        fontSize={18 * Screen.onePixel}
        keyboardType="email-address"
        onChangeText={text => props.func(text)}
        defaultValue={props.value}
      />
    </View>
  );
}
