import React, {useState} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';

export default function PassInput(props) {
  const Screen = screenDetails();
  const [visibility, setVisibility] = useState(false);

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
    </View>
  );
}
