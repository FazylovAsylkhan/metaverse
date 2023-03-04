import styled, { DefaultTheme } from 'styled-components';

enum Color {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INACTIVE = 'inactive',
}
enum FontFamily {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IProps {
  margin?: string;
  fontSize?: string;
  color?: string;
  theme?: DefaultTheme;
  fontFamily?: string;
  textTransform?: string;
}

const setColor = (props: IProps): string => {
  if (props.theme === undefined) return '';

  switch (props.color) {
    case Color.PRIMARY:
      return props.theme.palette.primary.default;
    case Color.INACTIVE:
      return props.theme.palette.secondary.inactive;
    case Color.SECONDARY:
      return props.theme.palette.secondary.default;
    default:
      return props.theme.palette.secondary.default;
  }
};

const setFontFamily = (props: IProps): string => {
  if (props.theme === undefined) return '';

  switch (props.fontFamily) {
    case FontFamily.PRIMARY:
      return props.theme.fonts.family.primary;
    case FontFamily.SECONDARY:
      return props.theme.fonts.family.secondary;
    default:
      return props.theme.fonts.family.secondary;
  }
};

export const P = styled.p<IProps>`
  margin: ${(props) => props.margin};
  color: ${(props) => setColor(props)};
  font-family: ${(props) => setFontFamily(props)};
  font-weight: 400;
  font-size: ${(props) => props.fontSize ?? '16px'};
  line-height: ${(props) => props.theme.fonts.height};
`;

export const H2 = styled.h2<IProps>`
  text-transform: ${(props) => props.textTransform ?? 'uppercase'};
  margin: ${(props) => props.margin};
  color: ${(props) => setColor(props)};
  font-family: ${(props) => setFontFamily(props)};
  font-weight: 700;
  font-size: ${(props) => props.fontSize ?? '36px'};
  line-height: ${(props) => props.theme.fonts.height};
`;

export const H3 = styled.h3<IProps>`
  font-family: ${(props) => setFontFamily(props)};
  text-transform: ${(props) => props.textTransform ?? 'uppercase'};
  font-weight: 700;
  color: ${(props) => setColor(props)};
  font-size: ${(props) => props.fontSize ?? '32px'};
  line-height: ${(props) => props.theme.fonts.height};
`;

export const H4 = styled.h4<IProps>`
  text-transform: ${(props) => props.textTransform ?? 'uppercase'};
  font-weight: 700;
  color: ${(props) => setColor(props)};
  font-family: ${(props) => setFontFamily(props)};
  font-size: ${(props) => props.fontSize ?? '24px'};
  line-height: ${(props) => props.theme.fonts.height};
`;

export const H5 = styled.h5<IProps>`
  font-weight: 700;
  color: ${(props) => setColor(props)};
  font-family: ${(props) => setFontFamily(props)};
  font-size: ${(props) => props.fontSize ?? '14px'};
  line-height: ${(props) => props.theme.fonts.height};
`;
