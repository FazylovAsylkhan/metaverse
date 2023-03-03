import React from 'react';
import { FieldText } from '@entities/field';
import { Button } from '@shared/ui';
import { StyledFormAuth } from './form-auth.style';

export function FormAuth(): JSX.Element {
  return (
    <StyledFormAuth>
      <FieldText name="name" />
      <FieldText name="email" />
      <Button>Get Early access</Button>
    </StyledFormAuth>
  );
}
