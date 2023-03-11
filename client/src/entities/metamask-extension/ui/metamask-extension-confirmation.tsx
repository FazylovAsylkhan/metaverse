import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollUp, useBlockingScreen } from '@shared/hooks';
import { H3, P, Span } from '@shared/styles';
import { ConfirmModal } from '@shared/ui';

interface IProps {
  onConfirm: () => void;
  title: string;
  description: string;
  buttonText: string;
  link: {
    text: string;
    href: string;
  };
}

export function MetamaskExtensionConfirmation(
  props: IProps
): JSX.Element | null {
  const { onConfirm, title, description, link, buttonText } = props;

  useScrollUp();
  useBlockingScreen();

  return (
    <ConfirmModal buttonText={buttonText} onClose={onConfirm}>
      <H3>{title}</H3>
      <P maxWidth="320px" textAlign="center">
        {description}{' '}
        <Link to={link.href}>
          <Span color="primary">{link.text}</Span>
        </Link>
      </P>
    </ConfirmModal>
  );
}
