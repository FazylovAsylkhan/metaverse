import styled from 'styled-components';

interface IProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  start: string;
  end: string;
  padding?: string;
  margin?: string;
}

export const Box = styled.div<IProps>`
  margin: ${(props) => props.margin};
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  padding: ${(props) => props.padding ?? 0};
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
`;
