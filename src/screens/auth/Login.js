import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import styles from '../../styles/auth';
import InputLogin from '../../components/InputLogin';
import imagebg from '../../assets/images/polabg.jpg';

const Login = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Success', 'Login Success', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('HomeStack');
          },
        },
      ]);
    } else {
      Alert.alert('Error', 'Wrong Password or Email');
    }
  };
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
              <Text style={styles.fontH}>Login</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.fontP}>
                Login to your existing account to access all the features in
                Zwallet.
              </Text>
            </View>
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="email-address"
              placeholder="Email"
              icon="mail-outline"
              onChange={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputWrapper}>
            <InputLogin
              type="password"
              placeholder="Password"
              icon="lock-closed-outline"
              onChange={text => setPassword(text)}
              secure={true}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgetPwd')}>
              <Text style={styles.fontForgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={onLogin}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fontP}>
              Don`t have an account? Let`s
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text> Sign Up </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Login;
