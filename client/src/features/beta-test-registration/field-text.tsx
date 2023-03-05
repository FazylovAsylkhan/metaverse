import React from 'react';
import { Flex, Label, H4, Input } from '@shared/styles';

interface IProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FieldInput(props: IProps): JSX.Element {
  const { name, value, onChange, type } = props;

  return (
    <Flex flexDirection="column" gap="8px">
      <Label id={name}>
        <H4>{name}</H4>
      </Label>
      <Input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        placeholder="We will display your email in participation list"
      />
    </Flex>
  );
}
