import React from 'react';
import { Box, Container, Wrapper } from '@shared/styles';
import {
  selectIsUserRegistered,
  selectIsUserConnected,
  selectUser,
} from '@entities/user';
import {
  RegistrationForm,
  AboutBetaTestRegistration,
} from '@features/beta-test-registration';
import {
  AddingUserToTableButton,
  ParticipationListing,
} from '@features/participation-listing';
import { PersonalData } from '@features/personal-data';
import { useAppSelector } from '@shared/hooks';

export function BetaTestRegistration(): JSX.Element {
  const isUserRegistered = useAppSelector(selectIsUserRegistered);
  const isUserConnected = useAppSelector(selectIsUserConnected);
  const { email, name } = useAppSelector(selectUser);

  return (
    <Wrapper>
      <Container>
        <Box direction="column" start="1" end="4">
          <AboutBetaTestRegistration />
          {isUserRegistered ? (
            <PersonalData
              items={[
                { title: 'name', description: name },
                { title: 'email', description: email },
              ]}>
              <AddingUserToTableButton />
            </PersonalData>
          ) : (
            <RegistrationForm />
          )}
        </Box>
        <Box direction="column" start="6" end="7">
          {isUserConnected ? <ParticipationListing /> : null}
        </Box>
      </Container>
    </Wrapper>
  );
}
