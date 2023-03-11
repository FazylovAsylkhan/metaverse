import React from 'react';
import { Button, DarkBackground, Div, Flex, Modal } from '@shared/styles';

interface IProps {
  children: React.ReactNode;
  buttonText: string;
  onClose: () => void;
}

export function ConfirmModal(props: IProps): JSX.Element {
  const { children, buttonText, onClose } = props;

  return (
    <Div position="absolute" zIndex="1000">
      <DarkBackground />
      <Modal>
        <Flex flexDirection="column" gap="95px" alignItems="center">
          <Flex flexDirection="column" gap="30px" alignItems="center">
            {children}
          </Flex>
          <Button onClick={onClose}>{buttonText}</Button>
        </Flex>
      </Modal>
    </Div>
  );
}
