import {createSlice} from '@reduxjs/toolkit';
import {historyTransaction} from '../asyncActions/transaction';

const initialState = {
  data: [],
  // getIdUser: {},
  dataTransfer: {},
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.getIdUser.recipient_id = action.payload;
    },
  },
  extraReducers: build => {
    build.addCase(historyTransaction.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  },
});
export const {selectRecipient} = transaction.actions;
export {historyTransaction};
export default transaction.reducer;
