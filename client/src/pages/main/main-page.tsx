import React from 'react';
import { Preview } from '@widgets/preview';
import { BetaTestRegistration } from '@widgets/beta-test-registration';
import { useSelector } from 'react-redux';
import { selectWallet } from '@entities/wallet';
import { ParticipationListing } from '@features/participation-listing';
import { selectUser } from '@entities/user';
import { Navigate } from 'react-router-dom';

export function MainPage(): JSX.Element {
  return (
    <>
      <Preview />
      <BetaTestRegistration />
    </>
  );
}
