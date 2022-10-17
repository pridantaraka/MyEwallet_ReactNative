import {createSlice} from '@reduxjs/toolkit';
import {userContact} from '../asyncActions/profile';

const initialState = {
  data: [],
  getIdUser: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.getIdUser.recipient_id = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(userContact.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  },
});
export const {selectRecipient} = profile.actions;
export {userContact};
export default profile.reducer;
