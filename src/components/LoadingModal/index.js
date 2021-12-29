import React from 'react';
import {Text, View, Modal, ActivityIndicator} from 'react-native';
import Colors from '../../constants/color';
import screenDetails from '../../constants/screenDetails';
import styles from './styles';

export default function LoadingModal(props) {
  const screen = screenDetails();
  return (
    <Modal animationType="slide" transparent={true} visible={props.isTrue}>
      <View style={styles.view}>
        <View style={styles.centered}>
          <ActivityIndicator
            animating={props.isTrue}
            color={Colors.shadeBlue}
            size="large"
          />
          <Text style={styles.text(screen)}>Please wait...</Text>
        </View>
      </View>
    </Modal>
  );
}
