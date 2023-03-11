/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

const initialState = {
  isShownTip: false,
};

export const metamaskExtensionSlice = createSlice({
  name: 'metamaskExtension',
  initialState,
  reducers: {
    shownTip: (state) => {
      state.isShownTip = true;
    },
  },
});

export const { shownTip } = metamaskExtensionSlice.actions;
export const metamaskExtensionReducer = metamaskExtensionSlice.reducer;
export const selectIsShownTip = (state: IRootState): boolean =>
  state.metamaskExtension.isShownTip;
