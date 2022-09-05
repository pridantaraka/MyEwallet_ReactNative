import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import Main from './src/screens/main';

const Stack = createNativeStackNavigator();

const App = () => {
  return <Main />;
};

export default App;
