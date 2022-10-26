import {createSlice} from '@reduxjs/toolkit';
import {
  userContact,
  ProfileDetail,
  editProfile,
  uploadImage,
} from '../asyncActions/profile';

const initialState = {
  data: [],
  detailProfile: {},
  getIdUser: {},
  dataEdit: {},
  errorMsg: null,
  successMsg: null,
  dataProfile: {},
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.getIdUser.recipient_id = action.payload;
    },
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
  },
  extraReducers: build => {
    build.addCase(userContact.fulfilled, (state, action) => {
      state.data = action.payload?.results;
    });
    build.addCase(ProfileDetail.fulfilled, (state, action) => {
      state.detailProfile = action.payload?.results;
    });
    build.addCase(editProfile.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(editProfile, (state, action) => {
      state.dataEdit = action.payload.results;
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
    build.addCase(uploadImage.pending, state => {
      state.errorMsg = null;
      state.successMsg = null;
    });
    build.addCase(uploadImage.fulfilled, (state, action) => {
      if (action.payload.results !== undefined) {
        state.successMsg = action.payload.message;
        state.errorMsg = action.payload.errorMsg;
        state.dataProfile.picture = action.payload.results.picture;
      } else {
        state.errorMsg = 'upload fail';
      }
    });
  },
});
export const {selectRecipient} = profile.actions;
export {userContact, ProfileDetail, editProfile, uploadImage};
export default profile.reducer;
