import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import styles from '../../styles/auth';
import InputLogin from '../../components/InputLogin';
import imagebg from '../../assets/images/polabg.jpg';

const Pin = ({navigation}) => {
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
              <Text style={styles.fontH}>Create Security PIN</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.fontP}>
                Create a PIN that`s contain 6 digits number for security purpose
                in MyEwallet.
              </Text>
            </View>
          </View>
          <View style={styles.pinRow}>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
            <View style={styles.pinRow}>
              <InputLogin type="text" />
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fontForgot}>Forgot Password?</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fontP}>
              Don`t have an account? Let`s Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Pin;
