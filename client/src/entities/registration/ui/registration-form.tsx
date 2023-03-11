import React from 'react';
import { Form, Button } from '@shared/styles';

interface IProps {
  children: React.ReactNode;
  submitButtonText: string;
  onSubmit: () => void;
}

export function RegistrationForm(props: IProps): JSX.Element {
  const { children, submitButtonText, onSubmit } = props;

  const handleChangeForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form
      onSubmit={(e) => handleChangeForm(e)}
      flexDirection="column"
      gap="18px">
      {children}
      <Button type="submit" margin="6px 0 0 0">
        {submitButtonText}
      </Button>
    </Form>
  );
}
