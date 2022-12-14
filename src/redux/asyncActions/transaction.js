import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const historyTransaction = createAsyncThunk(
  'transaction/HistoryTansaction',
  async ({token, limit, sortType}) => {
    const result = {};
    limit = parseInt(limit) || 5;
    sortType = 'DESC';
    try {
      const {data} = await http(token).get('/history');
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  },
);

export const TopupBalance = createAsyncThunk(
  'transaction/topup',
  async request => {
    const result = {};
    console.log('ini request', request);
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).patch('/topup', send, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      console.log('data asyc action', data);
      result.successMsg = data.message;
      return result;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);

export const getUserById = createAsyncThunk(
  'transaction/getUserById',
  async ({token, id_recipient}) => {
    const result = {};
    try {
      const {data} = await http(token).get(`/getUserId/${id_recipient}`);
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  },
);

export const Transfer = createAsyncThunk(
  'transaction/transfer',
  async request => {
    const result = {};
    try {
      const send = qs.stringify(request.data);
      const {data} = await http(request.token).post('/transfer', send, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      });
      console.log(data, 'asyc ation data');
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  },
);
