import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from '@shared/ui';
import { Box, Container, Div, Flex, H1, Img, Wrapper } from '@shared/styles';
import { Orbits } from '@entities/orbits';
import { PersonalData } from '@entities/personal-data';
import { useGetParticipatorByIdQuery } from '@entities/participation-listing';
import { HeaderWithConnectionWallet } from '@widgets/header-with-connection-wallet';
import planetImg from '@shared/assets/images/planet.png';

import { messagesParticipatorDetailsPage } from './mock';

export function ParticipatorDetailsPage(): JSX.Element {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetParticipatorByIdQuery(id ?? '');

  return (
    <ErrorBoundary>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data !== undefined && (
        <Wrapper height="100vh" padding="0 0 0 67px">
          <Container>
            <Box direction="column" start="1" end="12">
              <HeaderWithConnectionWallet />
            </Box>
            <Box start="1" end="5" margin="96px 0 0 0">
              <Flex flexDirection="column" gap="48px">
                <H1>{messagesParticipatorDetailsPage.title}</H1>
                <PersonalData
                  items={[
                    { title: 'name', description: data.username },
                    { title: 'email', description: data.email },
                    { title: 'wallet', description: data.address },
                  ]}
                />
              </Flex>
            </Box>
            <Box start="10" end="3">
              <Div position="absolute" right="-15%" top="50%" translateYHf>
                <Orbits>
                  <Img
                    position="absolute"
                    top="50%"
                    right="22%"
                    src={planetImg}
                    translateYHf
                    alt="planet"
                  />
                </Orbits>
              </Div>
            </Box>
          </Container>
        </Wrapper>
      )}
    </ErrorBoundary>
  );
}
