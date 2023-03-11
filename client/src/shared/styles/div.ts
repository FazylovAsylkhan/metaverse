import styled, { css } from 'styled-components';

interface IProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  padding?: string;
  margin?: string;
  border?: string;
  display?: string;
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  translateYHf?: boolean;
  zIndex?: string;
}

export const Div = styled.div<IProps>`
  position: ${(props) => props.position};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  z-index: ${(props) => props.zIndex};
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
