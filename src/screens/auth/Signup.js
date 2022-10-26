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
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../redux/asyncActions/auth';
import * as Yup from 'yup';
import {Formik} from 'formik';

const signUpSchema = Yup.object().shape({
  username: Yup.string().min(4, 'Min 4 Character').required('Required'),
  email: Yup.string()
    .email('Invalid email address format')
    .required('Required'),
  password: Yup.string().min(8).required('Required'),
});

const SignUpForm = ({errors, handleChange, handleSubmit}) => {
  return (
    <>
      <View style={styles.inputWrapper}>
        <InputLogin
          name="username"
          type="email-address"
          placeholder="Username"
          icon="person"
          onChange={handleChange}
        />
      </View>
      <View style={styles.inputWrapper}>
        <InputLogin
          name="email"
          type="email-address"
          placeholder="Email"
          icon="mail-outline"
          onChange={handleChange}
        />
      </View>
      <View style={styles.inputWrapper}>
        <InputLogin
          name="password"
          type="password"
          placeholder="Password"
          icon="lock-closed-outline"
          onChange={handleChange}
          secure={true}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const successMsg = useSelector(state => state.auth.successMsg);

  const onSignup = value => {
    const data = {
      username: value.username,
      email: value.email,
      password: value.password,
    };
    console.log(data, 'dari signup');
    dispatch(register(data));
    navigation.navigate('Login');
  };

  React.useState(() => {
    if (successMsg){
      dispatch(onSignup());
    }
  }, []);
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
            <Text style={styles.fontP}>
              Already have an account? Let`s
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default Signup;
