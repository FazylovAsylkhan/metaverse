import React from 'react';
import { Caption, Table, Tbody, Td, Th, Thead, Tr } from '@shared/styles';
import { H3, H4, H5 } from '@shared/styles/typography';

interface IParticipator {
  id: number;
  username: string;
  email: string;
  address: string;
}
interface IProps {
  participators: IParticipator[];
}

export function TableOfParticipators(props: IProps): JSX.Element {
  const { participators } = props;
  const titles = ['Name', 'Email', 'Wallet'];

  return (
    <Table>
      <Caption margin="0 0 35px 0">
        <H3 fontFamily="primary">Participation listing</H3>
      </Caption>
      <Thead>
        <Tr gridSize="1fr 1fr 1fr">
          {titles.map((title, i) => (
            <Th key={title} start={`${i + 1}`} end="1">
              <H4 fontFamily="primary">{title}</H4>
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {participators.map((participator) => (
          <Tr key={participator.id} gridSize="1fr 1fr 1fr">
            <Td start="1" end="1">
              <H5>{participator.username}</H5>
            </Td>
            <Td start="2" end="1">
              <H5>{participator.email}</H5>
            </Td>
            <Td start="3" end="1">
              <H5>{participator.address}</H5>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
