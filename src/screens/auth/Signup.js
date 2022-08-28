import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from '../../styles/auth';
import InputLogin from '../../components/InputLogin';
import imagebg from '../../assets/images/polabg.jpg';

const Signup = () => {
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
              <Text style={styles.fontH}>Sign Up</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.fontP}>
                Create your account to access MyEwallet.
              </Text>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin type="text" placeholder="First Name" icon="person" />
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin type="text" placeholder="Last Name" icon="person" />
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="email-address"
              placeholder="Email"
              icon="mail-outline"
            />
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="password"
              placeholder="Password"
              icon="lock-closed-outline"
              secure={true}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fontP}>
              Already have an account? Let`s Login
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Signup;
