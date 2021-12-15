import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import screenDetails from '../../constants/screenDetails';
import Colors from '../../constants/color';

export default function PassInput(props) {
  const Screen = screenDetails();
  const [visibility, setVisibility] = useState(false);
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
      <Icon style={styles.icon} name="form-textbox-password" size={20} />
      <TextInput
        style={styles.insideTextInput}
        placeholder={props.name}
        fontSize={Screen.up ? Screen.fps : Screen.fls}
        onChangeText={text => props.func(text)}
        defaultValue={props.value}
        secureTextEntry={!visibility}
      />
      <FontAwesome
        style={styles.icon}
        name={!visibility ? 'eye-slash' : 'eye'}
        size={20}
        onPress={() => setVisibility(!visibility)}
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
