import React from 'react';
import { Button, H2 } from '@shared/styles';

interface IProps {
  onConnect: () => void;
  addressOfWallet?: string;
  textButton: string;
}

export function ConnectionWallet(props: IProps): JSX.Element {
  const { onConnect, addressOfWallet, textButton } = props;

  return addressOfWallet !== undefined ? (
    <H2 color="primary" fontSize="13px" maxWidth="145px">
      {addressOfWallet}
    </H2>
  ) : (
    <Button onClick={onConnect}>{textButton}</Button>
  );
}
