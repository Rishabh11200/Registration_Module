import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import Colors from '../../../constants/color';
import {isEmailCheck, isPassCheck} from '../../../constants/validations';
import EmailInputText from '../../../components/inputs/emailInput/';
import PassInput from '../../../components/inputs/passInput/';
import ButtonField from '../../../components/button/SubmitButton/';
import LoadingModal from '../../../components/LoadingModal';
import styles from './styles';
import {set} from '../../../constants/dataBase/services';
import {global} from '../../../constants/global';

const signIn = ({navigation}) => {
  const [emailText, setemailText] = useState('');
  const [passText, setpassText] = useState('');
  const [onLoading, setonLoading] = useState(false);
  const [message, setmessage] = useState('');
  const [EmailCheck, setEmailCheck] = useState(false);
  const [PassCheck, setPassCheck] = useState(false);

  const screen = screenDetails();
  useEffect(() => {
    if (passText !== '') {
      if (isPassCheck(passText)) {
        setPassCheck(false);
      } else {
        setPassCheck(true);
      }
    }
  }, [passText]);

  function onTypeEmail(text) {
    setemailText(text);
    if (isEmailCheck(emailText)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  }
  function onTypePass(text) {
    setpassText(text);
  }
  function onLoadingSubmit(state) {
    setonLoading(state);
  }
  function onGlobalVarChange(state) {
    console.log('error?');
    global.isCheck = state;
  }
  async function onSignIn() {
    if (emailText != '' && passText != '') {
      if (isEmailCheck(emailText)) {
        setEmailCheck(false);
        if (isPassCheck(passText)) {
          setPassCheck(false);
          onLoadingSubmit(true);
          // onGlobalVarChange(true);
          let data = {email: emailText, pass: passText};
          await set('@authData', data);
          await set('@isSignedIn', true);
          setTimeout(() => {
            onLoadingSubmit(false);
            Alert.alert(`Signed in`, 'Voila! continue to your home.', [
              {
                text: 'OK',
                onPress: () => {
                  navigation.reset({
                    index: 0,
                    routes: [{name: 'all'}],
                  });
                },
              },
            ]);
          }, 3000);
        } else {
          setPassCheck(true);
        }
      } else {
        setEmailCheck(true);
      }
    } else {
      Alert.alert('Please enter all the details.');
    }
  }

  return (
    <SafeAreaView style={styles.container(screen)}>
      <LoadingModal isTrue={onLoading} />

      <ScrollView>
        <Text style={styles.headingText(screen)}>Sign in</Text>
        <EmailInputText name="Email" value={emailText} func={onTypeEmail} />
        {EmailCheck === true ? (
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Text style={styles.error}>
              {'\u2B24 Please enter email address in valid format.'}
            </Text>
            <Text style={styles.error}>{'-Format: abc@mailprovider.com.'}</Text>
          </View>
        ) : null}
        <PassInput name="Password" value={passText} func={onTypePass} />
        {PassCheck === true ? (
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Text style={styles.error}>
              {'\u2B24 Please enter Password with proper format.'}
            </Text>
            <Text style={styles.error}>
              {
                '-Must contain 1 captial character, 1 digit and minimum 8 characters.'
              }
            </Text>
          </View>
        ) : null}
        <ButtonField
          text="Sign in"
          icon="md-checkmark-circle"
          func={onSignIn}
        />
        <View style={{flex: 1}}>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('forgot1')}>
            Forgot Password?
          </Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lastView}>
          <Text style={styles.text1(screen)}>Didn't have an Account?</Text>
          <Text
            style={styles.text2(screen)}
            onPress={() => navigation.navigate('signUp')}>
            Create a new one
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
