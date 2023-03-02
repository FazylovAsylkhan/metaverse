import styled from 'styled-components';

interface IProps {
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  start: string;
  end: string;
  padding?: string;
}

export const Box = styled.div<IProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  padding: ${(props) => props.padding ?? 0};
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
`;
