/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

interface IUser {
  name?: string;
  email?: string;
  address?: string;
  isUserListedInTable?: boolean;
  isUserInstalledMetamaskExtension?: boolean;
}

const initialState: IUser = {
  name: undefined,
  email: undefined,
  address: undefined,
  isUserListedInTable: undefined,
  isUserInstalledMetamaskExtension: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registered: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    connected: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    disconnected: (state) => {
      state.address = initialState.address;
    },
    setIsUserListedInTable: (state, action: PayloadAction<boolean>) => {
      state.isUserListedInTable = action.payload;
    },
    setIsUserInstalledMetamaskExtension: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isUserInstalledMetamaskExtension = action.payload;
    },
  },
});

export const {
  registered,
  connected,
  disconnected,
  setIsUserListedInTable,
  setIsUserInstalledMetamaskExtension,
} = userSlice.actions;
export const user = userSlice.reducer;
export const selectUser = (state: IRootState): IUser => state.user;
export const selectIsUserRegistered = (state: IRootState): boolean =>
  state.user.name !== undefined && state.user.email !== undefined;
export const selectIsUserConnected = (state: IRootState): boolean =>
  state.user.address !== undefined;
export const selectIsUserListedInTable = (state: IRootState): boolean =>
  Boolean(state.user.isUserListedInTable);
export const selectIsUserInstalledMetamaskExtension = (
  state: IRootState
): boolean => Boolean(state.user.isUserInstalledMetamaskExtension);
