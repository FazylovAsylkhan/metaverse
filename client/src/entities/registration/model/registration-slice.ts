/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

interface IRegisteredUser {
  name?: string;
  email?: string;
}
interface IInitialState {
  registeredUser: IRegisteredUser;
}

const initialState: IInitialState = {
  registeredUser: {
    name: undefined,
    email: undefined,
  },
};

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    userRegistered: (state, action: PayloadAction<IRegisteredUser>) => {
      state.registeredUser.email = action.payload.email;
      state.registeredUser.name = action.payload.name;
    },
  },
});

export const { userRegistered } = registrationSlice.actions;
export const registrationReducer = registrationSlice.reducer;
export const selectRegisteredUser = (state: IRootState): IRegisteredUser =>
  state.registration.registeredUser;
export const selectIsUserRegistered = (state: IRootState): boolean =>
  state.registration.registeredUser.name !== undefined &&
  state.registration.registeredUser.email !== undefined;
