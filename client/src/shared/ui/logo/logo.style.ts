import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.palette.secondary.default};
  width: 199px;
  height: 44px;
  background: #5a5a5a;
  border: 1px dashed #c7c7c7;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  font-family: ${(props) => props.theme.fonts.primary};
`;
