import React from 'react';
import { StyledLink } from '../../styles';
import { StyledLogo } from './logo.style';

interface IProps {
  children: React.ReactNode;
}

export function Logo(props: IProps): JSX.Element {
  const { children } = props;
  return (
    <StyledLogo>
      <StyledLink padding="10px 78px" fontSize="18px" to="/main">
        {children}
      </StyledLink>
    </StyledLogo>
  );
}
