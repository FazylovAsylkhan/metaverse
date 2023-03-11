import styled, { css } from 'styled-components';

interface IProps {
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  translateYHf?: boolean;
  zIndex?: string;
}

export const Img = styled.img<IProps>`
  z-index: ${(props) => props.zIndex};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  ${(props) =>
    props.translateYHf ?? false
      ? css`
          transform: translateY(-50%);
        `
      : ''};
`;
