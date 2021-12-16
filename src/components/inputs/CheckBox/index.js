import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Colors from '../../../constants/color';
import CheckBox from '@react-native-community/checkbox';

export default function CheckBoxView(props) {
  return (
    <View style={styles.checkBoxView}>
      <CheckBox
        tintColors={{true: Colors.shadeBlue, false: Colors.black}}
        value={props.value}
        onValueChange={() => props.func()}
      />
      <Text style={styles.label}>{props.text}</Text>
    </View>
  );
}
