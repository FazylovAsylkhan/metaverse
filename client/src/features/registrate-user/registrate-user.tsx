import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  RegistrationForm,
  FieldInput,
  userRegistered,
} from '@entities/registration';

export function RegistrateUser(): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (): void => {
    if (name !== '' && email !== '') {
      dispatch(userRegistered({ name, email }));
    }
  };

  return (
    <RegistrationForm
      submitButtonText="get early access"
      onSubmit={handleSubmit}>
      <FieldInput
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <FieldInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
      />
    </RegistrationForm>
  );
}
