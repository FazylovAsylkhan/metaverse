import React from 'react';
import { Box, Container, H2, P, Wrapper } from '@shared/styles';
import { useSelector } from 'react-redux';
import { selectWallet } from '@entities/wallet';
import { selectUser } from '@entities/user';
import { UserInfo } from '@features/userInfo';
import { FormAuth } from '@features/registration';
import { ParticipationListing } from '@features/participation-listing';

export function BetaTestRegistration(): JSX.Element {
  const address = useSelector(selectWallet);
  const { email, name } = useSelector(selectUser);

  const isAuthorized = email !== null && name !== null;
  const isConnectedWallet = address !== undefined;

  return (
    <Wrapper>
      <Container>
        <Box direction="column" start="1" end="4">
          <H2 fontFamily="primary" color="primary" margin="0 0 18px 0">
            Beta Test Registration
          </H2>
          <P margin="0 0 36px 0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
            lorem luctus, accumsan tortor sit amet, volutpat orci. Integer
            pellentesque, sem eu ultricies venenatis, turpis metus molestie
            justo, eu porta ipsum purus et ipsum. Nam egestas gravida erat. Duis
            viverra varius mi, sit amet lacinia sem euismod nec. Curabitur et
            vestibulum justo. Vestibulum vehicula convallis mi, sodales
            malesuada metus. Vivamus non tortor non libero malesuada pretium non
            at libero.
          </P>
          {isAuthorized ? <UserInfo name={name} email={email} /> : <FormAuth />}
        </Box>
        <Box direction="column" start="6" end="7">
          {isConnectedWallet ? <ParticipationListing /> : null}
        </Box>
      </Container>
    </Wrapper>
  );
}
