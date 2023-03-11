/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/static-property-placement */
import React from 'react';
import { IDefaultProps, ITextMessage } from './types';
import { DEFAULT_ERROR } from './constants';

interface IState {
  hasError: boolean;
}

interface IProps extends IDefaultProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  static defaultProps: IDefaultProps = {
    textMessage: DEFAULT_ERROR,
  };

  textMessage: ITextMessage | undefined;

  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
    this.textMessage = props.textMessage;
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  override render(): JSX.Element | React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    const ErrorMessage = (
      <div>
        <h2>{this.textMessage?.title}</h2>
        <p>{this.textMessage?.description}</p>
      </div>
    );

    return hasError ? ErrorMessage : children;
  }
}
