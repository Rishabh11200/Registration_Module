import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import screenDetails from '../../constants/screenDetails';
import EmailInputText from '../../components/inputs/emailInput';
import PassInput from '../../components/inputs/passInput';
import {isEmailCheck} from '../../constants/validations';

const signIn = () => {
  const [emailText, setemailText] = useState('');
  const [passText, setpassText] = useState('');
  const screen = screenDetails();
  function onTypeEmail(text) {
    setemailText(text);
  }
  function onTypePass(text) {
    setpassText(text);
  }
  return (
    <SafeAreaView style={styles.container(screen)}>
      <ScrollView>
        <Text style={styles.headingText(screen)}>Sign in</Text>
        <EmailInputText name="Email" value={emailText} func={onTypeEmail} />
        <PassInput name="Password" value={passText} func={onTypePass} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: screen => ({
    flex: 1,
    flexDirection: screen.up ? 'column' : 'row',
    justifyContent: 'flex-start',
    padding: screen.up ? screen.width * 0.05 : screen.width * 0.05,
    backgroundColor: 'white',
  }),
  headingText: screen => ({
    fontSize: screen.up ? screen.fps + 5 : screen.fls + 5,
    color: 'black',
    padding: '3%',
    fontWeight: '800',
  }),
});
export default signIn;
