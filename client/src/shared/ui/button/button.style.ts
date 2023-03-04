import styled from 'styled-components';

interface IProps {
  margin?: string;
  padding?: string;
}

export const StyledButton = styled.button<IProps>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding ?? '10px 24px'};
  width: fit-content;
  border-radius: ${(props) => props.theme.common.borderRadius};
  background-color: ${(props) => props.theme.palette.primary.default};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: 18px;
  color: ${(props) => props.theme.palette.secondary.default};
  line-height: ${(props) => props.theme.fonts.height};
  text-transform: uppercase;
  &:hover {
    background: ${(props) => props.theme.palette.primary.hover};
  }
  &:focus {
    background: ${(props) => props.theme.palette.primary.inactive};
    color: ${(props) => props.theme.palette.secondary.inactive};
  }
`;
