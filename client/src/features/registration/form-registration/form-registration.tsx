import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@shared/ui';
import { Form } from '@shared/styles';
import { authorized } from '@entities/user';
import { FieldText } from './field-text';

export function FormAuth(): JSX.Element {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(authorized({ name, email }));
  };

  return (
    <Form
      onSubmit={(e) => handleChangeForm(e)}
      flexDirection="column"
      gap="18px">
      <FieldText
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
      />
      <FieldText
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
