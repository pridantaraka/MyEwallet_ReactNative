import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Login from './auth/Login';
import HomeStack from './HomeStack';
import Signup from './auth/Signup';
import ForgetPwd from './auth/ForgetPwd';
import ResetPwd from './auth/ResetPwd';

const Stack = createNativeStackNavigator();

const main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPwd"
          component={ForgetPwd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPwd"
          component={ResetPwd}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeStack"
          component={HomeStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default main;
