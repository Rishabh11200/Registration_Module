import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import screenDetails from '../../constants/screenDetails';
import Colors from '../../constants/color';
import EmailInputText from '../../components/inputs/emailInput';
import PassInput from '../../components/inputs/passInput';
import {isEmailCheck, isPassCheck} from '../../constants/validations';
import ButtonField from '../../components/button/SubmitButton';
import LoadingModal from '../../components/LoadingModal';

const signIn = ({navigation}) => {
  const [emailText, setemailText] = useState('');
  const [passText, setpassText] = useState('');
  const [onLoading, setonLoading] = useState(false);
  const [message, setmessage] = useState('');
  const [EmailCheck, setEmailCheck] = useState(false);
  const [PassCheck, setPassCheck] = useState(false);
  const screen = screenDetails();
  function onTypeEmail(text) {
    setemailText(text);
  }
  function onTypePass(text) {
    setpassText(text);
  }
  function onLoadingSubmit(state) {
    setonLoading(state);
  }
  function onSignIn() {
    if (emailText != null && passText != null) {
      if (isEmailCheck(emailText)) {
        setEmailCheck(false);
        if (isPassCheck(passText)) {
          setPassCheck(false);
          onLoadingSubmit(true);
          setTimeout(() => {
            onLoadingSubmit(false);
            Alert.alert('Successfuly sign in');
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
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.lastView}>
          <Text style={styles.text1(screen)}>Didn't have an Acoount?</Text>
          <Text
            style={styles.text2(screen)}
            onPress={() => navigation.navigate('signUp')}>
            Sign up now.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    flexDirection: screen.up ? 'column' : 'row',
    justifyContent: 'center',
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: Colors.white,
  }),
  headingText: screen => ({
    fontSize: screen.up ? screen.fps + 5 : screen.fls + 5,
    color: Colors.black,
    padding: '3%',
    fontWeight: '800',
  }),
  separator: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
  forgot: {
    textAlign: 'right',
    fontWeight: '700',
    color: Colors.shadeBlue,
  },
  lastView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
  text1: screen => ({
    fontWeight: 'bold',
    fontSize: screen.up ? screen.fps + 2 : screen.fls + 2,
    color: Colors.black,
  }),
  text2: screen => ({
    fontWeight: 'bold',
    fontSize: screen.up ? screen.fps + 2 : screen.fls + 2,
    color: Colors.darkBlue,
  }),
  error: {
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: '700',
    color: Colors.red,
  },
});
export default signIn;
