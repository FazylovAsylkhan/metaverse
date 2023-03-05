import React from 'react';
import { PersonalDataOfParticipator } from '@widgets/preview-personal-data';
import { ErrorBoundary } from '@shared/ui';

export function ParticipatorPage(): JSX.Element {
  return (
    <ErrorBoundary>
      <PersonalDataOfParticipator />
    </ErrorBoundary>
  );
}
