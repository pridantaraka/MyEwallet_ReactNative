import {createSlice} from '@reduxjs/toolkit';
import {userContact, ProfileDetail} from '../asyncActions/profile';

const initialState = {
  data: [],
  detailProfile: {},
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
      state.data = action.payload?.results;
    });
    build.addCase(ProfileDetail.fulfilled, (state, action) => {
      state.detailProfile = action.payload?.results;
      console.log('reducer', state.detailProfile);
    });
  },
});
export const {selectRecipient} = profile.actions;
export {userContact, ProfileDetail};
export default profile.reducer;
