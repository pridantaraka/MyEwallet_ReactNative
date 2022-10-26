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

export const editProfile = createAsyncThunk('editProfile', async request => {
  const result = {};
  try {
    const send = qs.stringify(request.data);
    const {data} = await http(request.token).patch('/update', send, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(data, 'data dari action');
    result.successMsg = data.message;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});
export const uploadImage = createAsyncThunk(
  'profile/update-picture',
  async param => {
    const result = {};
    const form = new FormData();
    form.append('picture', {
      uri: param.data.uri,
      name: param.data.fileName,
      type: param.data.type,
    });
    try {
      const {data} = await http(param.token).patch('/update', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      return result;
    }
  },
);
