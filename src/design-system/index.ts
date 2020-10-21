import lightTheme from './design-system_light';
import darkTheme from './design-system_dark';
export const DesignTokens: DesignTokensType = {
  dark: { name: 'dark', ...darkTheme },
  light: { name: 'light', ...lightTheme },
};

export const SystemThemePreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export type DesignTokensType = {
  dark: StationTheme;
  light: StationTheme;
};

export type DSBorderStyle = {
  width: number;
  style: string;
  color: string;
};

export type DSGradientStyle = string[];

export type DSShadowStyle = (string | number)[][];

export type StationTheme = {
  name: string;
} & StationThemeType;

export type StationThemeType = typeof lightTheme | typeof darkTheme;

export default DesignTokens;
