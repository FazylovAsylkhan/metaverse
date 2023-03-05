import React from 'react';
import { ConnectionWallet } from '@features/connection-wallet';
import { Box, Container, Wrapper } from '@shared/styles';
import { useAppSelector } from '@shared/hooks';
import { selectIsUserInstalledMetamaskExtension } from '@entities/user/user-slice';
import { MetamaskExtensionConfirmation } from '@features/metamask-extension-confirmation';
import { scrollUp } from '@shared/helpers';

export function Preview(): JSX.Element {
  const isUserInstalledMetamaskExtension = useAppSelector(
    selectIsUserInstalledMetamaskExtension
  );

  return (
    <Wrapper>
      <Container>
        <Box direction="column" start="1" end="12">
          <ConnectionWallet />
        </Box>
      </Container>
      {!isUserInstalledMetamaskExtension && (
        <MetamaskExtensionConfirmation onMounted={scrollUp} />
      )}
    </Wrapper>
  );
}
