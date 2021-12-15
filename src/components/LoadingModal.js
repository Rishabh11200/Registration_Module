import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/color';

export default function LoadingModal(props) {
  return (
    <Modal animationType="slide" transparent={true} visible={props.isTrue}>
      <View style={styles.view}>
        <View style={styles.centered}>
          <ActivityIndicator
            animating={props.isTrue}
            color={Colors.shadeBlue}
            size="large"
          />
          <Text style={styles.text}>Please wait...</Text>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 25,
    padding: '10%',
    margin: 20,
    borderRadius: 45,
    backgroundColor: Colors.white,
    shadowColor: Colors.babyBlue,
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '800',
    color: Colors.black,
  },
});
