import styled from 'styled-components';

interface IProps {
  height?: string;
  padding?: string;
}

export const Wrapper = styled.div<IProps>`
  padding: ${(props) => props.padding};
  position: relative;
  overflow-x: hidden;
  height: ${(props) => props.height};
`;
