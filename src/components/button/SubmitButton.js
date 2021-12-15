import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import screenDetails from '../../constants/screenDetails';
import Colors from '../../constants/color';

export default function ButtonField(props) {
  const Screen = screenDetails();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      elevation: 4,
      padding: 10,
      marginHorizontal: '20%',
      marginBottom: 10,
      marginTop: 20,
      borderRadius: 90,
      backgroundColor: Colors.babyBlue,
      shadowColor: Colors.black,
      shadowOpacity: 0.4,
      shadowRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      marginHorizontal: 5,
      alignSelf: 'center',
      justifyContent: 'center',
      color: Colors.black,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: Screen.up ? Screen.fps : Screen.fls,
      fontWeight: '700',
      color: Colors.black,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => props.func()}>
        <Icon style={styles.icon} name={props.icon} size={20} />
        <Text style={styles.text}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
