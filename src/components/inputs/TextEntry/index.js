import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import screenDetails from '../../../constants/screenDetails';

export default function TextEntry(props) {
  const Screen = screenDetails();
  return (
    <View style={styles.container}>
      <Ionicons style={styles.icon} name={props.iconName} size={20} />
      <TextInput
        style={styles.insideTextInput}
        placeholder={props.name}
        fontSize={Screen.up ? Screen.fps : Screen.fls}
        keyboardType={props.keyboard}
        onChangeText={text => props.func(text)}
        defaultValue={props.value}
      />
    </View>
  );
}
