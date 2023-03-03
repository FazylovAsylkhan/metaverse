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
  margin: ${(props) => props.margin};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: ${(props) => props.theme.fonts.height};
  font-family: ${(props) => props.theme.fonts.family.primary};
`;

export const Thead = styled.thead`
  padding-right: 30px;
  & > tr {
    &:first-child {
      border: none;
    }
  }
`;
export const Tbody = styled.tbody`
  overflow-y: auto;
  padding-right: 30px;
  max-height: 564px;
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
}

export const Td = styled.td<IColumnProps>`
  display: flex;
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
  padding: 16px 0;
`;

export const Th = styled.th<IColumnProps>`
  display: flex;
  grid-column: ${(props) => props.start} / ${(props) => props.end} span;
  text-transform: uppercase;
  padding-bottom: 16px;
`;
