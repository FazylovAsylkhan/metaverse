import styled from 'styled-components';

interface IProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: string;
}

export const Flex = styled.div<IProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
`;
