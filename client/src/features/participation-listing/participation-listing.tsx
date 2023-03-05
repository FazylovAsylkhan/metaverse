import React from 'react';
import { useGetListQuery } from '@shared/api';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import {
  selectIsUserListedInTable,
  selectUser,
  setIsUserListedInTable,
} from '@entities/user/user-slice';
import { TableOfParticipators } from './table-of-participators';

export function ParticipationListing(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetListQuery('');

  const isUserListedInTable = useAppSelector(selectIsUserListedInTable);
  const { name, email, address } = useAppSelector(selectUser);

  const userData = [name, email, address];
  const participators = data?.items;
  const titles = ['Name', 'Email', 'Wallet'];

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
      {participators !== undefined && (
        <TableOfParticipators
          onClickUserRow={() => dispatch(setIsUserListedInTable(false))}
          isShownUserRow={isUserListedInTable}
          headTitles={titles}
          userData={userData}
          participators={participators}
        />
      )}
    </>
  );
}
