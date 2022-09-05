import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './home/Dashboard';
import Transaction from './transaction/Transaction';
import History from './transaction/History';
import Transfer from './transaction/Transfer';
import Confrim from './transaction/Confirm';
import Success from './transaction/Success';
import Failed from './transaction/Failed';
import Topup from './transaction/Topup';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="Confrim" component={Confrim} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Failed" component={Failed} />
      <Stack.Screen name="Topup" component={Topup} />
    </Stack.Navigator>
  );
};

export default HomeStack;
