import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from '../../styles/auth';
import {login} from '../../redux/asyncActions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import imagebg from '../../assets/images/polabg.jpg';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [showText, setShow] = React.useState(false);
  const data = {
    email,
    password,
  };

  const onLogin = () => {
    dispatch(login(data));
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
            <View>
              <View style={styles.inputWrapper}>
                <TextInput
                  type="email-address"
                  placeholder="Email"
                  onChangeText={emailNew => setEmail(emailNew)}
                  initialValue={email}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter your password"
                  scure={true}
                  onChangeText={passwordNew => setPassword(passwordNew)}
                  initialValue={password}
                  secureTextEntry={!showText}
                />
              </View>
              <View style={styles.inputWrapper}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgetPwd')}>
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                    <Text> Sign Up </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Login;
