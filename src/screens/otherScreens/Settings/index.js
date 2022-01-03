import React, {useState, useMemo} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import styles from './styles';

const Settings = ({navigation}) => {
  const screen = screenDetails();
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const add5ToNumber = useMemo(() => {
    return addFunc(number);
  }, [number]);
  // const add5ToNumberWithoutUseMemo = addFunc(number);
  const onChangeHandler = text => {
    setNumber(text);
  };
  const counterHander = () => {
    setCounter(counter + 1);
  };
  function addFunc(number) {
    console.log('Function executed! & added 5 to number');
    return parseInt(number) + 5;
  }
  return (
    <SafeAreaView style={styles.container(screen)}>
      <View>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.navigate('Privacy');
          }}>
          <FontAwesome5 name="user-shield" color={Colors.black} size={25} />
          <Text style={styles.appButtonText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            navigation.navigate('About');
          }}>
          <MaterialCommunityIcons
            name="information-variant"
            color={Colors.black}
            size={30}
          />
          <Text style={styles.appButtonText}>About Us</Text>
        </TouchableOpacity>
        <View style={styles.TextView}>
          <TextInput
            style={styles.insideTextInput}
            placeholder="Enter a number"
            fontSize={screen.onePixel * 18}
            keyboardType="numeric"
            onChangeText={text => {
              onChangeHandler(text);
            }}
          />
        </View>
        <Text style={styles.text}>
          {/* After adding 5 to the number: {add5ToNumberWithoutUseMemo} */}
          After adding 5 to the number: {add5ToNumber}
        </Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            counterHander();
          }}>
          <Text style={styles.text}>Increment the counter</Text>
          <Text style={styles.text}>{counter}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
