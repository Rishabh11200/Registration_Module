import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import screenDetails from '../../../constants/screenDetails';
import styles from './styles';
import ImageSelection from '../../../components/inputs/ImageSelection';
import Colors from '../../../constants/color';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import ButtonField from '../../../components/button/SubmitButton';

const Profile = () => {
  const screen = screenDetails();
  const [Name, setName] = useState('Rishabh shah');
  const [Email, setEmail] = useState('rishabhshah1100@gmail.com');
  const [Phone, setPhone] = useState('955 575 1234');
  const [isEdit, setisEdit] = useState(false);
  const [radio, setradio] = useState('');
  const [radioValue, setradioValue] = useState('Male');
  const data = ['Male', 'Female'];
  onTypeName = text => {
    setName(text);
  };
  onTypeEmail = text => {
    setEmail(text);
  };
  onTypePhone = text => {
    setPhone(text);
  };
  onPressSave = () => {
    setisEdit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.headingText(screen)}>Profile</Text>
          <Foundation
            name="page-edit"
            size={24}
            color={Colors.black}
            style={{marginRight: 20, marginTop: 15}}
            onPress={() => {
              setisEdit(!isEdit);
            }}
          />
        </View>
        <View style={styles.wholePage}>
          <ImageSelection image={true} visible={isEdit} />
          <View style={styles.textView}>
            <Icon
              name="ios-person"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            {isEdit ? (
              <TextInput
                style={styles.input}
                onChangeText={onTypeName}
                value={Name}
                placeholder={Name}
                placeholderTextColor={Colors.black}
              />
            ) : (
              <Text style={styles.text}>{Name}</Text>
            )}
          </View>
          <View style={styles.textView}>
            <Entypo
              name="email"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            {isEdit ? (
              <TextInput
                style={styles.input}
                onChangeText={onTypeEmail}
                value={Email}
                placeholder={Email}
                placeholderTextColor={Colors.black}
              />
            ) : (
              <Text style={styles.text}>{Email}</Text>
            )}
          </View>
          <View style={styles.textView}>
            <Foundation
              name="male-female"
              size={28}
              color={Colors.black}
              style={styles.icon}
            />

            {!isEdit ? (
              <Text style={styles.text}>{radioValue}</Text>
            ) : (
              data.map((data, key) => {
                return (
                  <View key={key}>
                    {radio == key ? (
                      <TouchableOpacity style={styles.btn}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: 10,
                            paddingLeft: 20,
                          }}>
                          <MaterialIcons
                            name="radio-button-checked"
                            size={24}
                            color={Colors.black}
                            style={styles.icon}
                          />
                          <Text style={styles.text2}>{data}</Text>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          setradio(key);
                          setradioValue(data);
                        }}
                        style={styles.btn}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginLeft: 10,
                            paddingLeft: 20,
                          }}>
                          <MaterialIcons
                            name="radio-button-unchecked"
                            size={24}
                            color={Colors.black}
                            style={styles.icon}
                          />
                          <Text style={styles.text2}>{data}</Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                );
              })
            )}
          </View>
          <View style={styles.textView}>
            <Feather
              name="phone-call"
              size={24}
              color={Colors.black}
              style={styles.icon}
            />
            {isEdit ? (
              <TextInput
                style={styles.input}
                onChangeText={onTypePhone}
                value={Phone}
                placeholder="955 575 1234"
                placeholderTextColor={Colors.black}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.text}>{Phone}</Text>
            )}
          </View>
          {isEdit && (
            <ButtonField
              text="Save"
              icon="md-checkmark-circle"
              func={onPressSave}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
