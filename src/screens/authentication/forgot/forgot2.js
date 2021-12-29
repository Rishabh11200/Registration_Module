import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, Alert} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles2';
import PassInput from '../../../components/inputs/passInput/';
import ButtonField from '../../../components/button/SubmitButton/';
import LoadingModal from '../../../components/LoadingModal';
import {isPassCheck} from '../../../constants/validations';

const forgot2 = ({navigation}) => {
  const screen = screenDetails();
  const [passText, setpassText] = useState('');
  const [PassCheck, setPassCheck] = useState(false);
  const [cPassText, setcPassText] = useState('');
  const [cPassCheck, setcPassCheck] = useState(false);
  const [onLoading, setonLoading] = useState(false);

  useEffect(() => {
    if (passText !== '') {
      if (cPassText !== passText) {
        setcPassCheck(true);
      } else {
        setcPassCheck(false);
      }
      if (isPassCheck(passText)) {
        setPassCheck(false);
      } else {
        setPassCheck(true);
      }
    }
  }, [passText, cPassText]);

  function onTypePass(text) {
    setpassText(text);
    if (isPassCheck(passText)) {
      setPassCheck(false);
    } else {
      setPassCheck(true);
    }
  }

  function onTypecPass(text) {
    setcPassText(text);
  }

  function onLoadingSubmit(state) {
    setonLoading(state);
  }

  function onForgot() {
    if (passText !== null && cPassText !== null) {
      if (isPassCheck(passText)) {
        setPassCheck(false);
        onLoadingSubmit(true);
        setTimeout(() => {
          onLoadingSubmit(false);
          Alert.alert(`Password reset!`, 'Voila! continue to sign in.', [
            {text: 'OK', onPress: () => navigation.navigate('signIn')},
          ]);
        }, 3000);
      } else {
        setPassCheck(true);
      }
    } else {
      Alert.alert('Enter password.');
    }
  }
  return (
    <SafeAreaView style={styles.container(screen)}>
      <LoadingModal isTrue={onLoading} />
      <ScrollView>
        <Text style={styles.headingText(screen)}>Forgot password?(2/2)</Text>
        <PassInput name="New password" value={passText} func={onTypePass} />
        {PassCheck === true ? (
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Text style={styles.error(screen)}>
              {'\u2B24 Please enter Password with proper format.'}
            </Text>
            <Text style={styles.error(screen)}>
              {
                '-Must contain 1 captial character, 1 digit and minimum 8 characters.'
              }
            </Text>
          </View>
        ) : null}
        <PassInput
          name="Confirm new password"
          value={cPassText}
          func={onTypecPass}
        />
        {cPassCheck === true ? (
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Text style={styles.error}>
              {'\u2B24 New password and Confirm new password are not matching.'}
            </Text>
          </View>
        ) : null}
        <ButtonField text="Done" icon="md-checkmark-circle" func={onForgot} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default forgot2;
