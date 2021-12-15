import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import screenDetails from '../../constants/screenDetails';
import Colors from '../../constants/color';
import {isEmailCheck} from '../../constants/validations';

export default function EmailInputText(props) {
  const Screen = screenDetails();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      elevation: 15,
      padding: 10,
      margin: 20,
      borderRadius: 90,
      backgroundColor: Colors.white,
      shadowColor: Colors.shadeBlue,
      shadowOpacity: 0.4,
      shadowRadius: 5,
    },
    icon: {
      marginHorizontal: 5,
      alignSelf: 'center',
      justifyContent: 'center',
      color: Colors.black,
    },
    insideTextInput: {
      flex: 1,
      color: Colors.black,
    },
  });
  return (
    <View style={styles.container}>
      <MaterialIcon style={styles.icon} name="email" size={20} />
      <TextInput
        style={styles.insideTextInput}
        placeholder={props.name}
        fontSize={Screen.up ? Screen.fps : Screen.fls}
        keyboardType="email-address"
        onChangeText={text => props.func(text)}
        defaultValue={props.value}
      />
    </View>
  );
}
