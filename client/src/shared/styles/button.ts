import styled, { css } from 'styled-components';

interface IProps {
  margin?: string;
  padding?: string;
  disable?: boolean;
  position?: string;
}

export const Button = styled.button<IProps>`
  position: ${(props) => props.position ?? 'static'};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding ?? '10px 24px'};
  width: fit-content;
  border-radius: ${(props) => props.theme.common.borderRadius};
  background-color: ${(props) => props.theme.palette.primary.default};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: 14px;
  color: ${(props) => props.theme.palette.secondary.default};
  line-height: ${(props) => props.theme.fonts.height};
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.palette.primary.hover};
  }
  ${(p) =>
    p.disable ?? false
      ? css`
          background: ${(props) => props.theme.palette.primary.inactive};
          color: ${(props) => props.theme.palette.secondary.inactive};
          &:hover {
            cursor: auto;
            background: ${(props) => props.theme.palette.primary.inactive};
            color: ${(props) => props.theme.palette.secondary.inactive};
          }
        `
      : ''}
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 7px;
  right: 0;
  width: 14px;
  height: 14px;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 16px;
    width: 10px;
    height: 1px;
    background-color: white;
    border-radius: 2px;
  }
  &::before {
    transform: rotate(45deg);
    left: 2px;
  }
  &:after {
    transform: rotate(-45deg);
    right: 2px;
  }
`;
