import React from 'react';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { Button } from '@shared/styles';
import {
  addToTable,
  selectIsUserAddedToTable,
} from '@entities/participation-listing';
import { selectIsWalletConnected } from '@entities/connection-wallet';

export function AddUserToParticipationListing(): JSX.Element {
  const dispatch = useAppDispatch();
  const isUserAddedToTable = useAppSelector(selectIsUserAddedToTable);
  const isWalletConnected = useAppSelector(selectIsWalletConnected);

  return (
    <Button
      margin="6px 0 0 0"
      disable={isUserAddedToTable || !isWalletConnected}
      onClick={() => dispatch(addToTable())}>
      List Me to the table
    </Button>
  );
}
