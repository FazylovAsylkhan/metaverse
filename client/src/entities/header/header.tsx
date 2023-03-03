import React from 'react';
import { Logo } from '@shared/ui';
import { Button } from '@shared/ui/button';
import { StyledHeader } from './header.style';

export function Header(): JSX.Element {
  return (
    <StyledHeader>
      <Logo>Logo</Logo>
      <Button>Connect Metamask</Button>
    </StyledHeader>
  );
}
