import {createSlice} from '@reduxjs/toolkit';
import {
  historyTransaction,
  TopupBalance,
  getUserById,
} from '../asyncActions/transaction';

const initialState = {
  data: [],
  dataTransfer: {},
  dataTopup: {},
  dataRecipient: {},
  successMsg: null,
  errorMsg: null,
};

const transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    selectRecipient: (state, action) => {
      state.dataTransfer.recipient_id = action.payload;
    },
    resetMsg: state => {
      state.successMsg = null;
      state.errorMsg = null;
    },
    inputAmount: (state, action) => {
      state.dataTransfer.amount = action.payload.amount;
      state.dataTransfer.note = action.payload.note;
      state.dataTransfer.time = action.payload.time;
      state.dataTransfer.date = action.payload.date;
      state.dataTransfer.pin = action.payload.pin;
      state.dataTransfer.type_id = action.payload.type_id;
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
    build.addCase(getUserById.fulfilled, (state, action) => {
      state.dataRecipient = action.payload.results;
    });
  },
});
export const {selectRecipient, inputAmount, resetMsg} = transaction.actions;
export {historyTransaction, TopupBalance, getUserById};
export default transaction.reducer;
