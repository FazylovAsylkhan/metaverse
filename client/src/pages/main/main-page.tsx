/* eslint-disable promise/always-return */
import React from 'react';
import { Box, Container, H2, P, Wrapper } from '@shared/styles';
import { Header } from '@entities/header';
import { FormAuth } from '@features/form-auth';
import { TableWallet } from '@features/table-wallets';

export function MainPage(): JSX.Element {
  return (
    <>
      <Wrapper>
        <Container>
          <Box direction="column" start="1" end="12">
            <Header />
          </Box>
        </Container>
      </Wrapper>
      <Wrapper>
        <Container>
          <Box direction="column" start="1" end="4">
            <H2 margin="0 0 18px 0">Beta Test Registration</H2>
            <P margin="0 0 36px 0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              at lorem luctus, accumsan tortor sit amet, volutpat orci. Integer
              pellentesque, sem eu ultricies venenatis, turpis metus molestie
              justo, eu porta ipsum purus et ipsum. Nam egestas gravida erat.
              Duis viverra varius mi, sit amet lacinia sem euismod nec.
              Curabitur et vestibulum justo. Vestibulum vehicula convallis mi,
              sodales malesuada metus. Vivamus non tortor non libero malesuada
              pretium non at libero.
            </P>
            <FormAuth />
          </Box>
          <Box direction="column" start="6" end="7">
            <TableWallet />
          </Box>
        </Container>
      </Wrapper>
    </>
  );
}
