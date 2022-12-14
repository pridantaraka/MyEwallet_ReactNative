import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../../styles/auth';
import InputLogin from '../../components/InputLogin';
import imagebg from '../../assets/images/polabg.jpg';

const ResetPwd = ({navigation}) => {
  return (
    <>
      <ScrollView style={styles.wrapper}>
        <View style={styles.header}>
          <ImageBackground source={imagebg} style={styles.image}>
            <Text style={styles.headerText}>MyEwallet</Text>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.fontWrapper}>
            <View style={styles.inputWrapper}>
              <Text style={styles.fontH}>Reset Password</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.fontP}>
                Enter your MyEwallet e-mail so we can send you a password reset
                link.
              </Text>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="Create New Password"
              placeholder="Password"
              icon="lock-closed-outline"
              secure={true}
            />
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="Confirm New Password"
              placeholder="Password"
              icon="lock-closed-outline"
              secure={true}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default ResetPwd;
