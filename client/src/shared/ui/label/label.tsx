import React from 'react';
import { StyledLabel } from './label.style';

interface IProps extends React.HTMLAttributes<HTMLLabelElement> {
  id: string;
}

export function Label(props: IProps): JSX.Element {
  const { children, id } = props;
  return <StyledLabel id={id}>{children}</StyledLabel>;
}
