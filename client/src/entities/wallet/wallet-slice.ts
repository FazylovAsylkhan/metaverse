/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

export interface IWalletState {
  address: string | undefined;
}
const initialState: IWalletState = {
  address: undefined,
};

export const WalletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connected: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    disconnected: (state) => {
      state.address = initialState.address;
    },
  },
});

export const { connected, disconnected } = WalletSlice.actions;
export const wallet = WalletSlice.reducer;
export const selectWallet = (state: IRootState): string | undefined =>
  state.wallet.address;
