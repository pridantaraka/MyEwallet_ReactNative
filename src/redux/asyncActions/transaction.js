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
