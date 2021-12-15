import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import screenDetails from '../../constants/screenDetails';
import Colors from '../../constants/color';
import ImageSelection from '../../components/inputs/ImageSelection';

const signUp = () => {
  const screen = screenDetails();

  return (
    <SafeAreaView style={styles.container(screen)}>
      <ScrollView>
        <Text style={styles.headingText(screen)}>Registration</Text>
        <ImageSelection />
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
});

export default signUp;
