import React from 'react';
import { StyledButton } from './button.style';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  margin?: string;
}
export function Button(props: IProps): JSX.Element {
  const { children, onClick, margin, type = 'button' } = props;

  return (
    <StyledButton margin={margin} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}
