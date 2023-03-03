import styled from 'styled-components';

interface IProps {
  margin?: string;
}

export const P = styled.p<IProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => props.theme.palette.secondary.default};
  font-family: ${(props) => props.theme.fonts.family.secondary};
  font-weight: 400;
  font-size: 16px;
  line-height: ${(props) => props.theme.fonts.height};
`;

export const H2 = styled.h2<IProps>`
  text-transform: uppercase;
  margin: ${(props) => props.margin};
  color: ${(props) => props.theme.palette.primary.default};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-weight: 700;
  font-size: 36px;
  line-height: ${(props) => props.theme.fonts.height};
`;
