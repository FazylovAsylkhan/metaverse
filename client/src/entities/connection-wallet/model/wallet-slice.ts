/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

interface IInitialState {
  address?: string;
}

const initialState: IInitialState = {
  address: undefined,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    walletConnected: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    walletDisconnected: (state) => {
      state.address = initialState.address;
    },
  },
});

export const { walletConnected, walletDisconnected } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
export const selectWalletAddress = (state: IRootState): string | undefined =>
  state.wallet.address;
export const selectIsWalletConnected = (state: IRootState): boolean =>
  state.wallet.address !== undefined;
