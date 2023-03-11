import React from 'react';
import { useAppDispatch, useAppSelector } from '@shared/hooks';
import {
  ParticipationListing,
  removeFromTable,
  selectIsUserAddedToTable,
  useGetListQuery,
} from '@entities/participation-listing';
import { selectRegisteredUser } from '@entities/registration';
import { selectWalletAddress } from '@entities/connection-wallet';

export function ShowParticipationListing(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetListQuery('');

  const isUserListedInTable = useAppSelector(selectIsUserAddedToTable);
  const { name, email } = useAppSelector(selectRegisteredUser);
  const walletAddress = useAppSelector(selectWalletAddress);

  const userData = [name, email, walletAddress];
  const participators = data?.items;
  const titles = ['Name', 'Email', 'Wallet'];

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}
      {participators !== undefined && (
        <ParticipationListing
          onClickUserRow={() => dispatch(removeFromTable())}
          isShownUserRow={isUserListedInTable}
          headTitles={titles}
          userData={userData}
          participators={participators}
        />
      )}
    </>
  );
}
