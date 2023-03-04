import React from 'react';
import { ConnectionWallet } from '@features/connection-wallet';
import { Box, Container, Wrapper } from '@shared/styles';

export function Preview(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <Box direction="column" start="1" end="12">
          <ConnectionWallet />
        </Box>
      </Container>
    </Wrapper>
  );
}
