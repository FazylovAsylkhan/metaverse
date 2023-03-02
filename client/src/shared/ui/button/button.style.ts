import styled from 'styled-components';

export interface IStyledButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'reset' | 'submit';
}

const setProps = (props: IStyledButtonProps): IStyledButtonProps => ({
  type: props.type ?? 'button',
});

export const StyledButton = styled.button.attrs(setProps)`
  padding: 10px 24px;
  border-radius: ${(props) => props.theme.common.borderRadius};
  background-color: ${(props) => props.theme.palette.primary.default};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 18px;
  color: ${(props) => props.theme.palette.secondary.default};
  line-height: 120%;
  text-transform: uppercase;
  &:hover {
    background: ${(props) => props.theme.palette.primary.hover};
  }
  &:focus {
    background: ${(props) => props.theme.palette.primary.inactive};
    color: ${(props) => props.theme.palette.secondary.inactive};
  }
`;
