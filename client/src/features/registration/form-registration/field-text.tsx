import React from 'react';
import { Input, Label } from '@shared/ui';
import { Flex } from '@shared/styles';

interface IProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FieldText(props: IProps): JSX.Element {
  const { name, value, onChange } = props;

  return (
    <Flex flexDirection="column" gap="8px">
      <Label id={name}>{name}</Label>
      <Input
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        placeholder="We will display your email in participation list"
      />
    </Flex>
  );
}
