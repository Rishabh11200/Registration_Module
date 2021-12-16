import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../constants/color';
import styles from './styles';

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
