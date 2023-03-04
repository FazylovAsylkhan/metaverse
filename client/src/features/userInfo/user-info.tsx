import React from 'react';
import { Flex } from '@shared/styles';
import { H3, H4 } from '@shared/styles/typography';
import { Button } from '@shared/ui';

interface IProps {
  name: string;
  email: string;
}
export function UserInfo(props: IProps): JSX.Element {
  const { name, email } = props;

  return (
    <Flex flexDirection="column" gap="22px">
      <Flex flexDirection="column" gap="8px">
        <H4 fontFamily="primary">Name</H4>
        <H3 color="primary">{name}</H3>
      </Flex>
      <Flex flexDirection="column" gap="8px">
        <H4 fontFamily="primary">Email</H4>
        <H3 color="primary">{email}</H3>
      </Flex>
      <Button margin="28px 0 0 0">List Me to the table</Button>
    </Flex>
  );
}
