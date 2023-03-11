import React from 'react';
import { Flex, H3, H4, H5 } from '@shared/styles';
import { Item } from './styles';

interface IProps {
  items: Array<{
    title: string;
    description: string;
  }>;
}

export function RoadMapStats(props: IProps): JSX.Element {
  const { items } = props;

  return (
    <Flex flexDirection="column" alignItems="center" gap="42px">
      <H3 fontSize="22px">RoadMap Stats</H3>
      <Flex flexDirection="column" gap="8px">
        {items.map(({ title, description }) => (
          <Item key={title}>
            <H4 fontSize="22px" color="primary">
              {title}
            </H4>
            <H5 fontWeight="400" textTransform="uppercase">
              {description}
            </H5>
          </Item>
        ))}
      </Flex>
    </Flex>
  );
}
