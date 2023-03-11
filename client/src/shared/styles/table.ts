import styled from 'styled-components';

interface IProps {
  margin?: string;
  padding?: string;
  gridSize?: string;
  position?: string;
  display?: string;
  width?: string;
}

export const Table = styled.table<IProps>`
  padding: ${(props) => props.padding};
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.secondary.default};
  border-collapse: collapse;
`;

export const Caption = styled.caption<IProps>`
  display: flex;
  margin: ${(props) => props.margin ?? '0 0 35px 0'};
`;

export const Thead = styled.thead<IProps>`
  margin: ${(props) => props.margin ?? '0 0px 16px 0'};
  padding: ${(props) => props.padding ?? '0 30px 0 0'};
  & > tr {
    &:first-child {
      border: none;
    }
  }
`;
export const Tbody = styled.tbody<IProps>`
  overflow-y: auto;
  padding-right: 30px;
  max-height: 548px;
  z-index: 100;
`;

export const Tr = styled.tr<IProps>`
  width: ${(props) => props.width};
  display: ${(props) => props.display ?? 'grid'};
  position: ${(props) => props.position ?? 'static'};
  grid-template-columns: ${(props) => props.gridSize ?? '0'};
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.default};
  &:first-child {
    border-top: 1px solid ${(props) => props.theme.palette.secondary.default};
  }
`;

interface IColumnProps {
  start: string;
  end: string;
  padding?: string;
}

export const Td = styled.td<IColumnProps>`
  display: flex;
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
  padding: ${(props) => props.padding ?? '16px 0'};
  &:last-child {
    padding-bottom: 0;
  }
`;

export const Th = styled.th<IColumnProps>`
  display: flex;
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
`;
