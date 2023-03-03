import React from 'react';
import { InputTypes } from './types';
import { StyledInput } from './input.style';

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: InputTypes;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: IProps): JSX.Element {
  const { id, placeholder, value, name, onChange, type = 'text' } = props;

  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
