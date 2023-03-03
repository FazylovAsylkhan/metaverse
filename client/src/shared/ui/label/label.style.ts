import styled from 'styled-components';

export const StyledLabel = styled.label`
  text-transform: capitalize;
  color: ${(props) => props.theme.palette.secondary.default};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-weight: 700;
  font-size: 24px;
  line-height: ${(props) => props.theme.fonts.height};
`;
