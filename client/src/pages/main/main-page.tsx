import React from 'react';

import { ErrorBoundary } from '@shared/ui';
import { Box, Container, H1, H2, P, Wrapper } from '@shared/styles';
import { useAppSelector } from '@shared/hooks';

import {
  selectIsUserRegistered,
  selectRegisteredUser,
} from '@entities/registration/model/registration-slice';
import { RoadMapStats } from '@entities/roadmap-stats';
import { PersonalData } from '@entities/personal-data';
import { selectIsShownTip } from '@entities/metamask-extension';

import { RegistrateUser } from '@features/registrate-user';
import { AnimatePlanet } from '@features/animate-planet';
import { ShowMetamaskExtensionTip } from '@features/show-metamask-extension-tip';
import { ShowParticipationListing } from '@features/show-participation-listing';
import { AddUserToParticipationListing } from '@features/add-user-to-participation-listing';
import { HeaderWithConnectionWallet } from '@widgets/header-with-connection-wallet';
import { selectIsWalletConnected } from '@entities/connection-wallet';

import { messagesMainPage } from './mock';

export function MainPage(): JSX.Element {
  const isShownTip = useAppSelector(selectIsShownTip);
  const isUserRegistered = useAppSelector(selectIsUserRegistered);
  const isUserConnected = useAppSelector(selectIsWalletConnected);
  const { email, name } = useAppSelector(selectRegisteredUser);

  return (
    <ErrorBoundary>
      {!isShownTip && <ShowMetamaskExtensionTip />}
      <Wrapper padding="0px 0 60px 0" height="700px">
        <Container>
          <Box direction="column" start="1" end="12">
            <HeaderWithConnectionWallet />
          </Box>
          <Box margin="205px 0 0 0" direction="column" start="1" end="10">
            <H1 fontFamily="primary" fontSize="74px" maxWidth="1007px">
              {messagesMainPage.metaverseInfo.title}
            </H1>
            <P maxWidth="421px" margin="45px 0 0 0">
              {messagesMainPage.metaverseInfo.description}
            </P>
            <AnimatePlanet />
          </Box>
          <Box margin="205px 0 0 0" direction="column" start="11" end="2">
            <RoadMapStats items={messagesMainPage.roadMap.items} />
          </Box>
        </Container>
      </Wrapper>
      <Wrapper height="800px" padding="48px 0 70px 0">
        <Container>
          <Box direction="column" start="1" end="4">
            <H2
              fontFamily="primary"
              fontSize="21px"
              color="primary"
              margin="0 0 18px 0">
              {messagesMainPage.aboutTestRegistration.title}
            </H2>
            <P margin="0 0 36px 0">
              {messagesMainPage.aboutTestRegistration.description}
            </P>
            {isUserRegistered ? (
              <PersonalData
                items={[
                  { title: 'name', description: name },
                  { title: 'email', description: email },
                ]}>
                <AddUserToParticipationListing />
              </PersonalData>
            ) : (
              <RegistrateUser />
            )}
          </Box>

          {isUserConnected ? (
            <Box direction="column" start="6" end="7">
              <ShowParticipationListing />
            </Box>
          ) : null}
        </Container>
      </Wrapper>
    </ErrorBoundary>
  );
}
