import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, TextInput} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles';
import ImageSelection from '../../../components/inputs/ImageSelection';
import Colors from '../../../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {
  const screen = screenDetails();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  onTypeName = text => {
    setName(text);
  };
  onTypeEmail = text => {
    setEmail(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headingText(screen)}>Profile</Text>
        <View style={styles.wholePage}>
          <ImageSelection image={true} />
          <View style={styles.textView}>
            <Icon
              name="ios-person"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onTypeName}
              value={Name}
              placeholder="Rishabh shah"
              placeholderTextColor={Colors.black}
            />
          </View>
          <View style={styles.textView}>
            <Entypo
              name="email"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onTypeEmail}
              value={Email}
              placeholder="rishabhshah1100@gmail.com"
              placeholderTextColor={Colors.black}
            />
          </View>
          <View style={styles.textView}>
            <Foundation
              name="male-female"
              size={28}
              color={Colors.black}
              style={styles.icon}
            />
            <Text style={styles.text}>Male</Text>
          </View>
          <View style={styles.textView}>
            <Feather
              name="phone-call"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={onTypeEmail}
              value={Email}
              placeholder="+91 955 575 1234"
              placeholderTextColor={Colors.black}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
