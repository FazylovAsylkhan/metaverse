import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.secondary.default};
  border-collapse: collapse;
`;

interface ICaptionProps {
  margin?: string;
}

export const Caption = styled.caption<ICaptionProps>`
  display: flex;
  margin: ${(props) => props.margin ?? '0 0 35px 0'};
`;

interface THeadProps {
  margin?: string;
  padding?: string;
}

export const Thead = styled.thead<THeadProps>`
  margin: ${(props) => props.margin ?? '0 0px 16px 0'};
  padding: ${(props) => props.padding ?? '0 30px 0 0'};
  & > tr {
    &:first-child {
      border: none;
    }
  }
`;
export const Tbody = styled.tbody`
  overflow-y: auto;
  padding-right: 30px;
  max-height: 550px;
  z-index: 100;
`;

interface IRowProps {
  gridSize: string;
}

export const Tr = styled.tr<IRowProps>`
  display: grid;
  grid-template-columns: ${(props) => props.gridSize};
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
`;

export const Th = styled.th<IColumnProps>`
  display: flex;
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
`;
