import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import {isEmailCheck, isPassCheck} from '../../../constants/validations';
import ImageSelection from '../../../components/inputs/ImageSelection';
import TextEntry from '../../../components/inputs/TextEntry';
import EmailInputText from '../../../components/inputs/emailInput';
import PassInput from '../../../components/inputs/passInput';
import CheckBoxView from '../../../components/inputs/CheckBox';
import LoadingModal from '../../../components/LoadingModal';
import ButtonField from '../../../components/button/SubmitButton/';
import styles from './styles';

const signUp = ({navigation}) => {
  const screen = screenDetails();
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [emailText, setemailText] = useState('');
  const [EmailCheck, setEmailCheck] = useState(false);
  const [passText, setpassText] = useState('');
  const [PassCheck, setPassCheck] = useState(false);
  const [cPassText, setcPassText] = useState('');
  const [cPassCheck, setcPassCheck] = useState(false);
  const [checkBox, setcheckBox] = useState(false);
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

  function onFNameType(text) {
    setfName(text);
  }
  function onLNameType(text) {
    setlName(text);
  }
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
    if (isPassCheck(passText)) {
      setPassCheck(false);
    } else {
      setPassCheck(true);
    }
  }
  function onTypecPass(text) {
    setcPassText(text);
  }
  function onCheckBoxChange() {
    setcheckBox(!checkBox);
  }
  function onLoadingSubmit(state) {
    setonLoading(state);
  }
  function onSignUp() {
    if (
      fName !== null &&
      lName !== null &&
      emailText !== null &&
      passText !== null &&
      cPassText !== null &&
      checkBox !== false
    ) {
      if (isEmailCheck(emailText)) {
        setEmailCheck(false);
        if (isPassCheck(passText)) {
          setPassCheck(false);
          onLoadingSubmit(true);
          setTimeout(() => {
            onLoadingSubmit(false);
            Alert.alert(`${fName} registered`, 'Voila! continue to sign in.', [
              {text: 'OK', onPress: () => navigation.navigate('signIn')},
            ]);
            // Alert.alert(`Signed up`, 'Voila! continue to your profile.', [
            //   {
            //     text: 'OK',
            //     onPress: () => {
            //       navigation.reset({
            //         index: 0,
            //         routes: [{name: 'all', params: {from: 'signup'}}],
            //       });
            //     },
            //   },
            // ]);
          }, 3000);
        } else {
          setPassCheck(true);
        }
      } else {
        setEmailCheck(true);
      }
    } else {
      Alert.alert(
        'Please enter all the details and Accpet terms and conditions.',
      );
    }
  }
  return (
    <SafeAreaView style={styles.container(screen)}>
      <LoadingModal isTrue={onLoading} />
      <KeyboardAvoidingView
        behaviour="position"
        keyboardVerticalOffset={screen.platform === 'ios' ? 64 : 0}>
        <ScrollView>
          <Text style={styles.headingText(screen)}>Registration</Text>
          <ImageSelection />
          <TextEntry
            iconName="ios-person"
            name="First name"
            keyboard="default"
            value={fName}
            func={onFNameType}
          />
          <TextEntry
            iconName="ios-person"
            name="Last name"
            keyboard="default"
            value={lName}
            func={onLNameType}
          />
          <EmailInputText name="Email" value={emailText} func={onTypeEmail} />
          {EmailCheck === true ? (
            <View style={{flex: 1, marginHorizontal: 30}}>
              <Text style={styles.error(screen)}>
                {'\u2B24 Please enter email address in valid format.'}
              </Text>
              <Text style={styles.error(screen)}>
                {'-Format: abc@mailprovider.com.'}
              </Text>
            </View>
          ) : null}
          <PassInput name="Password" value={passText} func={onTypePass} />
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
            name="Confirm Password"
            value={cPassText}
            func={onTypecPass}
          />
          {cPassCheck === true ? (
            <View style={{flex: 1, marginHorizontal: 30}}>
              <Text style={styles.error}>
                {'\u2B24 Password and Confirm Password are not matching.'}
              </Text>
            </View>
          ) : null}
          <CheckBoxView
            value={checkBox}
            func={onCheckBoxChange}
            text="By checking box you are accepting terms and conditions."
          />
          <ButtonField
            text="Sign up"
            icon="md-checkmark-circle"
            func={onSignUp}
          />
          <View style={styles.separator}></View>
          <View style={styles.lastView}>
            <Text style={styles.text1(screen)}>Already have an Account?</Text>
            <Text
              style={styles.text2(screen)}
              onPress={() => navigation.navigate('signIn')}>
              Sign in
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default signUp;
