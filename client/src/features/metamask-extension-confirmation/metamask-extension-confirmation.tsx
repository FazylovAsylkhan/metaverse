import React, { useEffect } from 'react';
import { setIsUserInstalledMetamaskExtension } from '@entities/user/user-slice';
import { useAppDispatch } from '@shared/hooks';
import { H3, P, StyledLink } from '@shared/styles';
import { ConfirmModal } from '@shared/ui';
import { useBlockingScreen } from '@shared/hooks/use-blocking-screen';

interface IProps {
  onMounted: () => void;
}

export function MetamaskExtensionConfirmation(
  props: IProps
): JSX.Element | null {
  const { onMounted } = props;
  const dispatch = useAppDispatch();
  useBlockingScreen();
  useEffect(() => {
    onMounted();
  }, [onMounted]);

  return (
    <ConfirmModal
      buttonText="Skip this step"
      onClose={() => dispatch(setIsUserInstalledMetamaskExtension(true))}>
      <H3>Metamask extension</H3>
      <P maxWidth="320px" textAlign="center">
        To work with our application, you have to install the{' '}
        <StyledLink color="primary" to="https://metamask.io/">
          Metamask browser extension
        </StyledLink>
      </P>
    </ConfirmModal>
  );
}
