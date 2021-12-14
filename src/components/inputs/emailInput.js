import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import screenDetails from '../../constants/screenDetails';

export default function EmailInputText(props) {
  const Screen = screenDetails();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      elevation: 10,
      padding: 10,
      margin: 20,
      borderRadius: 90,
      backgroundColor: 'white',
    },
    icon: {
      marginHorizontal: 5,
      alignSelf: 'center',
      justifyContent: 'center',
      color: 'black',
    },
    insideTextInput: {
      flex: 1,
      color: 'black',
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
      {/* {this.state.errorEmail === true ? (
        <Icon
          style={[styles.icon, {color: 'red'}]}
          name="exclamation-circle"
          size={20}
        />
      ) : this.state.blankCheck === true ? (
        <Icon
          style={[styles.icon, {color: 'red'}]}
          name="exclamation-circle"
          size={20}
        />
      ) : null} */}
    </View>
  );
}
