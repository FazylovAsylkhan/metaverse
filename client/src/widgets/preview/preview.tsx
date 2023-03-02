import React from 'react';
import { Header } from '@shared/ui';
import { Box, Container } from '@shared/styles';
import { StyledPreview } from './preview.style';

export function Preview(): JSX.Element {
  return (
    <StyledPreview>
      <Container>
        <Box direction="column" start="1" end="12">
          <Header />
        </Box>
      </Container>
    </StyledPreview>
  );
}
