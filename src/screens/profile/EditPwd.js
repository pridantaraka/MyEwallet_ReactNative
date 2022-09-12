import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  THIRD_COLOR,
  FOURTH_COLOR,
} from '../../styles/constant';
import styles from '../../styles/global';
import InputLogin from '../../components/InputLogin';
import Icon from 'react-native-vector-icons/Ionicons';

const EditPwd = ({navigation}) => {
  return (
    <ScrollView style={styleslocal.wrapper}>
      <View>
        <View>
          <Text style={styleslocal.text1}>
            You must enter your current password and then type your new password
            twice.
          </Text>
        </View>
        <View style={styleslocal.inputWrapper}>
          <InputLogin
            type="Create New Password"
            placeholder="Current Password"
            icon="lock-closed-outline"
            secure={true}
          />
        </View>
        <View style={styleslocal.inputWrapper}>
          <InputLogin
            type="Create New Password"
            placeholder="New Password"
            icon="lock-closed-outline"
            secure={true}
          />
        </View>
        <View style={styleslocal.inputWrapper}>
          <InputLogin
            type="Create New Password"
            placeholder="Repeat Password"
            icon="lock-closed-outline"
            secure={true}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => navigation.navigate('Profilemenu')}>
            <Text style={styles.font2}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styleslocal = StyleSheet.create({
  wrapper: {
    marginHorizontal: 10,
    flex: 1,
  },
  inputWrapper: {
    marginVertical: 15,
  },
  card: {
    height: 50,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: 15,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 18,
    fontWeight: '400',
    color: PRIMARY_COLOR,
  },
});

export default EditPwd;
