import {createSlice} from '@reduxjs/toolkit';
import {login, register} from '../asyncActions/auth';

const initialState = {
  token: null,
  id: null,
  errorMsg: null,
  successMsg: null,
  deviceToken: null,
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.deviceToken = action.payload;
    },
    logout: state => {
      return initialState;
    },
  },
  extraReducers: build => {
    build.addCase(login.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(login.fulfilled, (state, action) => {
      const token = action.payload?.token;
      const pin = action.payload?.pin;
      const id = action.payload?.id;
      state.errorMsg = action.payload?.error;
      if (token) {
        state.token = token;
        state.pin = pin;
        state.id = id;
      } else {
        state.errorMsg = action.payload?.errorMsg;
        state.successMsg = action.payload?.successMsg;
      }
    });
  },
});

export default auth.reducer;
export {login};
export const {logOut, saveToken} = auth.actions;
