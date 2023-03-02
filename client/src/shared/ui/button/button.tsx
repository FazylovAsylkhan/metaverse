import React from 'react';
import { StyledButton, IStyledButtonProps } from './button.style';

export function Button(props: IStyledButtonProps): JSX.Element {
  const { children, type } = props;

  return <StyledButton type={type}>{children}</StyledButton>;
}
