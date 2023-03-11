import React from 'react';
import { Link } from 'react-router-dom';
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
  Span,
  ButtonClose,
} from '@shared/styles';
import { IParticipator } from '../api';

interface IProps {
  participators: IParticipator[];
  isShownUserRow: boolean;
  userData: Array<string | undefined>;
  headTitles: string[];
  onClickUserRow: () => void;
}

export function ParticipationListing(props: IProps): JSX.Element {
  const {
    isShownUserRow,
    participators,
    userData,
    headTitles,
    onClickUserRow,
  } = props;

  const renderHeadRow = (values: string[]): JSX.Element => (
    <Tr gridSize="1fr 1fr 1fr" width="668">
      {values.map((value, i) => (
        <Th key={value} start={`${i + 1}`} end="1">
          <H4 fontFamily="primary">{value}</H4>
        </Th>
      ))}
    </Tr>
  );

  const renderBodyRows = (values: string[], id: number): JSX.Element => (
    <Tr key={id} gridSize="1fr 1fr 1fr" width="668">
      {values.map((value, i) => (
        <Td key={`${value}-${id}`} start={`${i + 1}`} end="1">
          <Link to={`/id/${id}`}>
            <Span display="block" maxWidth="205px">
              {value}
            </Span>
          </Link>
        </Td>
      ))}
    </Tr>
  );

  const renderUserRow = (values: Array<string | undefined>): JSX.Element => (
    <Tr gridSize="1fr 1fr 1fr" width="668" position="relative">
      {values.map((value, i) => (
        <Td key={value} start={`${i + 1}`} end="1">
          <H5 textTransform="none" maxWidth="205px" color="primary">
            {value}
          </H5>
        </Td>
      ))}
      <ButtonClose onClick={onClickUserRow} />
    </Tr>
  );

  return (
    <Table>
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
