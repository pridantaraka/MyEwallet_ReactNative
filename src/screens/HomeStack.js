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
import Profilemenu from './profile/Profilemenu';
import Profile from './profile/Profile';
import EditPwd from './profile/EditPwd';
import Contact from './home/Contact';
import EditPhone from './profile/EditPhone';
import PinCheck from './transaction/PinCheck';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Confrim" component={Confrim} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Failed" component={Failed} />
        <Stack.Screen name="Topup" component={Topup} />
        <Stack.Screen name="Profilemenu" component={Profilemenu} />
        <Stack.Screen name="Personal Info" component={Profile} />
        <Stack.Screen name="Change Password" component={EditPwd} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Add Phone" component={EditPhone} />
        <Stack.Screen name="Pin Confirm" component={PinCheck} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
