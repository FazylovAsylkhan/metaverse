import React from 'react';
import { useParams } from 'react-router-dom';
import { ConnectionWallet } from '@features/connection-wallet';
import { Box, Container, Flex, H1, H3, H4, Wrapper } from '@shared/styles';
import { useGetParticipatorByIdQuery } from '@shared/api';
import { PersonalData } from '@features/personal-data';

export function PersonalDataOfParticipator(): JSX.Element {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetParticipatorByIdQuery(id ?? '');

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data !== undefined && (
        <Wrapper>
          <Container>
            <Box direction="column" start="1" end="12">
              <ConnectionWallet />
            </Box>
            <Box start="1" end="12" margin="100px 0 0 0">
              <Flex flexDirection="column" gap="48px">
                <H1>personal data</H1>
                <PersonalData
                  items={[
                    { title: 'name', description: data.username },
                    { title: 'email', description: data.email },
                    { title: 'wallet', description: data.address },
                  ]}
                />
              </Flex>
            </Box>
          </Container>
        </Wrapper>
      )}
    </>
  );
}
