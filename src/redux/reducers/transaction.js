import {createSlice} from '@reduxjs/toolkit';
import {historyTransaction, TopupBalance} from '../asyncActions/transaction';

const initialState = {
  data: [],
  // getIdUser: {},
  dataTransfer: {},
  dataTopup: {},
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
    build.addCase(TopupBalance.fulfilled, (state, action) => {
      state.dataTopup = action.payload.results;
      state.errorMsg = action.payload?.errorMsg;
      state.successMsg = action.payload?.successMsg;
    });
  },
});
export const {selectRecipient} = transaction.actions;
export {historyTransaction, TopupBalance};
export default transaction.reducer;
