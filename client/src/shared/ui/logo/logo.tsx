import React from 'react';
import { Link } from 'react-router-dom';
import { Span } from '../../styles';
import { StyledLogo } from './logo.style';

interface IProps {
  children: React.ReactNode;
}

export function Logo(props: IProps): JSX.Element {
  const { children } = props;
  return (
    <StyledLogo>
      <Link to="/main">
        <Span padding="10px 78px" fontSize="18px">
          {children}
        </Span>
      </Link>
    </StyledLogo>
  );
}
