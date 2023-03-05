import React from 'react';
import {
  Caption,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  H3,
  H4,
  H5,
  StyledLink,
  ButtonClose,
} from '@shared/styles';
import { IParticipator } from '@shared/api';

interface IProps {
  participators: IParticipator[];
  isShownUserRow: boolean;
  userData: Array<string | undefined>;
  headTitles: string[];
  onClickUserRow: () => void;
}

export function TableOfParticipators(props: IProps): JSX.Element {
  const {
    isShownUserRow,
    participators,
    userData,
    headTitles,
    onClickUserRow,
  } = props;

  const renderHeadRow = (values: string[]): JSX.Element => (
    <Tr gridSize="1fr 1fr 1fr">
      {values.map((value, i) => (
        <Th key={value} start={`${i + 1}`} end="1">
          <H4 fontFamily="primary">{value}</H4>
        </Th>
      ))}
    </Tr>
  );

  const renderBodyRows = (values: string[], id: number): JSX.Element => (
    <Tr key={id} gridSize="1fr 1fr 1fr">
      {values.map((value, i) => (
        <Td key={id} start={`${i + 1}`} end="1">
          <StyledLink maxWidth="205px" to={`/id/${id}`}>
            {value}
          </StyledLink>
        </Td>
      ))}
    </Tr>
  );

  const renderUserRow = (values: Array<string | undefined>): JSX.Element => (
    <Tr gridSize="1fr 1fr 1fr" position="relative">
      {values.map((value, i) => (
        <Td key={value} start={`${i + 1}`} end="1">
          <H5 maxWidth="205px" color="primary">
            {value}
          </H5>
        </Td>
      ))}
      <ButtonClose onClick={onClickUserRow} />
    </Tr>
  );

  return (
    <Table padding="0 70px 0 0">
      <Caption>
        <H3 fontFamily="primary">Participation listing</H3>
      </Caption>
      <Thead>{renderHeadRow(headTitles)}</Thead>
      <Tbody>
        {isShownUserRow && renderUserRow(userData)}
        {participators.map(({ username, email, address, id }) =>
          renderBodyRows([username, email, address], id)
        )}
      </Tbody>
    </Table>
  );
}
