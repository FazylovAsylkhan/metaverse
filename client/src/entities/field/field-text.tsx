import React, { useState } from 'react';
import { Input, Label } from '@shared/ui';
import { StyledField } from './field-text.style';

interface IProps {
  name: string;
}

export function FieldText(props: IProps): JSX.Element {
  const { name } = props;
  const [inputNameValue, setInputNameValue] = useState('');

  return (
    <StyledField>
      <Label id={name}>{name}</Label>
      <Input
        value={inputNameValue}
        id={name}
        name={name}
        onChange={(e) => setInputNameValue(e.target.value)}
        placeholder="We will display your email in participation list"
      />
    </StyledField>
  );
}
