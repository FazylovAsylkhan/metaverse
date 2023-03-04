import styled from 'styled-components';

interface IProps {
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const Header = styled.header<IProps>`
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
