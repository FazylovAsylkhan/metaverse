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
        <Input
          width="100%"
          margin="8px 0 0 0"
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={onChange}
          placeholder="We will display your email in participation list"
        />
      </Label>
    </Flex>
  );
}
