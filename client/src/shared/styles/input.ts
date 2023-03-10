import styled, { css } from 'styled-components';

interface IProps {
  margin?: string;
  width?: string;
}

const inputCss = css`
  padding: 12px 120px 12px 18px;
  border: 1px solid ${(props) => props.theme.palette.secondary};
  border-radius: ${(props) => props.theme.common.borderRadius};
  color: ${(props) => props.theme.palette.secondary.default};
  background: transparent;
`;

export const Input = styled.input<IProps>`
  width: ${(props) => props.width};
  ${(p) => (p.type === 'text' || p.type === 'email' ? inputCss : '')}
  margin: ${(props) => props.margin};
`;
