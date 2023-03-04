import React from 'react';
import { TableOfParticipators } from '@features/participation-listing/table-of-participators';
import { participators } from './mock';

export function ParticipationListing(): JSX.Element {
  return <TableOfParticipators participators={participators} />;
}
