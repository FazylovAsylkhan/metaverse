import React from 'react';
import { ResetStyles } from './reset.style';
import { StyledApp } from './app.style';

export function GlobalStyle(): JSX.Element {
  return (
    <>
      <ResetStyles />
      <StyledApp />
    </>
  );
}
