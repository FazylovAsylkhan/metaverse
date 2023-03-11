import styled from 'styled-components';

interface IProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
  padding?: string;
  margin?: string;
}

export const Flex = styled.div<IProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;
