import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const userContact = createAsyncThunk(
  'allUserContact/userContact',
  async ({token, limit}) => {
    const result = {};
    limit = parseInt(limit) || 5;
    try {
      const {data} = await http(token).get('/getUsers');
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  },
);

export const ProfileDetail = createAsyncThunk(
  'profile/profileDetail',
  async token => {
    const result = {};
    try {
      const {data} = await http(token).get('/status');
      return data;
    } catch (e) {
      result.message = e.response.data.message;
      return result;
    }
  },
);
