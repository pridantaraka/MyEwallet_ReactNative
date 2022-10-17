import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../reducers/auth';
import transaction from '../reducers/transaction';
import profile from '../reducers/profile';

const authConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(authConfig, auth),
  transaction,
  profile,
});

export default reducer;
