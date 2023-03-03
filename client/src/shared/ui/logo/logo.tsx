import React from 'react';
import { StyledLogo } from './logo.style';

interface IProps {
  children: React.ReactNode;
}

export function Logo(props: IProps): JSX.Element {
  const { children } = props;
  return <StyledLogo>{children}</StyledLogo>;
}
