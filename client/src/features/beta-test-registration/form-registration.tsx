import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button } from '@shared/styles';
import { registered } from '@entities/user';
import { FieldInput } from './field-text';

export function RegistrationForm(): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registered({ name, email }));
  };

  return (
    <Form
      onSubmit={(e) => handleChangeForm(e)}
      flexDirection="column"
      gap="18px">
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
      <Button type="submit" margin="6px 0 0 0">
        Get Early access
      </Button>
    </Form>
  );
}
