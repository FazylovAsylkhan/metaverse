import { Flex, H3, H4 } from '@shared/styles';
import React from 'react';

interface IData {
  title: string;
  description: string | undefined;
}

interface IProps {
  items: IData[];
  children?: React.ReactNode;
}

export function PersonalData(props: IProps): JSX.Element {
  const { items, children } = props;

  return (
    <Flex flexDirection="column" gap="22px">
      {items.map(({ title, description }) => (
        <Flex key={title} flexDirection="column" gap="8px">
          <H4>{title}</H4>
          <H3 fontSize="20px" color="primary">
            {description}
          </H3>
        </Flex>
      ))}
      {children}
    </Flex>
  );
}
