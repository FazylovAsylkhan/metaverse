import styled from 'styled-components';

interface IProps {
  flexDirection?: string;
  gap?: string;
  alignItems?: string;
}

export const Flex = styled.div<IProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.alignItems};
`;
