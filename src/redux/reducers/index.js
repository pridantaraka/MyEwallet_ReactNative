import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '../reducers/auth';
const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const persistanceAuthReducer = persistReducer(authPersistConfig, auth);

const reducer = combineReducers({
  auth: persistanceAuthReducer,
});

export default reducer;
