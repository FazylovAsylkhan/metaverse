import styled from 'styled-components';

export const Item = styled.div`
  width: 218px;
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  gap: 12px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.palette.secondary.default};
  &:last-child {
    border-bottom: none;
  }
`;
