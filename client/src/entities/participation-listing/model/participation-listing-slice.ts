/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '@app/providers';

const initialState = {
  isUserAddedToTable: false,
};

export const participationListingTableSlice = createSlice({
  name: 'participationListingTable',
  initialState,
  reducers: {
    addToTable: (state) => {
      state.isUserAddedToTable = true;
    },
    removeFromTable: (state) => {
      state.isUserAddedToTable = false;
    },
  },
});

export const { addToTable, removeFromTable } =
  participationListingTableSlice.actions;
export const participationListingTableReducer =
  participationListingTableSlice.reducer;
export const selectIsUserAddedToTable = (state: IRootState): boolean =>
  state.participationListingTable.isUserAddedToTable;
