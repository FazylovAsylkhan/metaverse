import styled from 'styled-components';

interface IProps {
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

export const Form = styled.form<IProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => props.flexDirection};
`;
