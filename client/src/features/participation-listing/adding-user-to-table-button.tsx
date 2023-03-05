import React from 'react';
import {
  selectIsUserConnected,
  selectIsUserListedInTable,
  setIsUserListedInTable,
} from '@entities/user/user-slice';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import { Button } from '@shared/styles';

export function AddingUserToTableButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const isUserListedInTable = useAppSelector(selectIsUserListedInTable);
  const isUserConnected = useAppSelector(selectIsUserConnected);

  return (
    <Button
      margin="6px 0 0 0"
      disable={isUserListedInTable || !isUserConnected}
      onClick={() => dispatch(setIsUserListedInTable(true))}>
      List Me to the table
    </Button>
  );
}
