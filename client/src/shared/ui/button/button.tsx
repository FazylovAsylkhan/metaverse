import React from 'react';
import { StyledButton } from './button.style';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
}
export function Button(props: IProps): JSX.Element {
  const { children, type = 'button' } = props;

  return <StyledButton type={type}>{children}</StyledButton>;
}
