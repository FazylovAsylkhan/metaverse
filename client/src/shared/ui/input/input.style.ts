import styled, { css } from 'styled-components';

const inputCss = css`
  padding: 12px 120px 12px 18px;
  border: 1px solid ${(props) => props.theme.palette.secondary};
  border-radius: ${(props) => props.theme.common.borderRadius};
  color: ${(props) => props.theme.palette.secondary.default};
  background: transparent;
`;

export const StyledInput = styled.input`
  ${(p) => (p.type === 'text' ? inputCss : '')}
`;
