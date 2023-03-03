import React from 'react';
import { Caption, Table, Tbody, Td, Th, Thead, Tr } from '@shared/styles';
import { dataWallets } from './mock';

export function TableWallet(): JSX.Element {
  const titles = ['Name', 'Email', 'Wallet'];

  return (
    <Table>
      <Caption margin="0 0 35px 0">Participation listing</Caption>
      <Thead>
        <Tr gridSize="1fr 1fr 1fr">
          {titles.map((title, i) => (
            <Th key={title} start={`${i + 1}`} end="1">
              {title}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {dataWallets.map((wallet) => (
          <Tr key={wallet.id} gridSize="1fr 1fr 1fr">
            <Td start="1" end="1">
              {wallet.username}
            </Td>
            <Td start="2" end="1">
              {wallet.email}
            </Td>
            <Td start="3" end="1">
              {wallet.address}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
