/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

export interface IUser {
  name: string | null;
  email: string | null;
}
const initialState: IUser = {
  name: null,
  email: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authorized: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const { authorized } = userSlice.actions;
export const user = userSlice.reducer;
export const selectUser = (state: IRootState): IUser => state.user;
