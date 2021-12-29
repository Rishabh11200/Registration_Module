import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Alert, Modal} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles1';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {isEmailCheck} from '../../../constants/validations';
import EmailInputText from '../../../components/inputs/emailInput/';
import ButtonField from '../../../components/button/SubmitButton/';

const forgot1 = ({navigation}) => {
  const screen = screenDetails();
  const [emailText, setemailText] = useState('');
  const [EmailCheck, setEmailCheck] = useState(false);
  const [isTrue, setisTrue] = useState(false);

  function onTypeEmail(text) {
    setemailText(text);
    if (isEmailCheck(emailText)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  }

  function onNext() {
    if (emailText != '') {
      if (isEmailCheck(emailText)) {
        setEmailCheck(false);
        setisTrue(true);
      } else {
        setEmailCheck(true);
      }
    } else {
      Alert.alert('Please enter all the details.');
    }
  }

  return (
    <SafeAreaView style={styles.container(screen)}>
      <ScrollView>
        <Text style={styles.headingText(screen)}>Forgot password?(1/2)</Text>
        <EmailInputText
          name="Enter a registered email"
          value={emailText}
          func={onTypeEmail}
        />
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
        <ButtonField text="Next" icon="arrow-forward-circle" func={onNext} />
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={isTrue}>
        <View style={styles.view}>
          <View style={styles.centered}>
            <Text style={styles.text}>Enter OTP</Text>
            <OTPInputView
              style={styles.otpView}
              pinCount={4}
              autoFocusOnLoad={false}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={otp => {
                navigation.navigate('forgot2');
                setisTrue(false);
              }}
            />
            <Text
              onPress={() => {
                setisTrue(false);
              }}
              style={styles.closeText}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default forgot1;
