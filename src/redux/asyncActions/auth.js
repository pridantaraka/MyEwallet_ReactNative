import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const login = createAsyncThunk('auth/login', async request => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/login', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    result.successMsg = data.message;
    result.token = data.results.token;
    result.pin = data.results.pin;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('auth/register', send);
    console.log('tes' + data);
    results.data = data.result;
    results.message = data.message;
    return results;
  } catch (e) {
    results.error = e.response.data.result[0].msg;
    console.log(e.response.data.result[0].msg);
    return results;
  }
});

export const createPin = createAsyncThunk('auth/pin', async request => {
  const results = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().post('auth/pin', send);
    console.log(data);
    results.data = data.results;
    results.message = data.message;
    return results;
  } catch (e) {
    return e;
  }
});
