import { addDecorator, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withLinks } from '@storybook/addon-links';
import ThemeProvider from 'react-jss';
// import { withThemesProvider } from 'themeprovider-storybook';
import { withThemesProvider, ThemesProvider } from 'storybook-addon-jss-theme';
import DesignTokens from '../src/design-system';

addDecorator(centered);
addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
  viewport: {
    defaultViewport: 'ChromeExtensionStationQuickSwitch',
    viewports: {
        ChromeExtensionStationRecent: {
            name: 'Station\'s popup size',
            styles: {
                width: '320px',
                height: '300px',
            }
        },
        ChromeExtensionStationQuickSwitch: {
            name: 'Station\'s Quick Switch size',
            styles: {
                width: '600px',
                height: '463px',
            }
        },
        ChromeExtensionDefault: {
            name: 'Chrome Extension popup (default size)',
            styles: {
                width: '300px',
                height: '200px',
            }
        },
        ChromeExtensionMax: {
          name: 'Chrome Extension popup (max size)',
          styles: {
              width: '800px',
              height: '600px',
          }
        },
        ChromeExtensionMin: {
            name: 'Chrome Extension popup (min size)',
            styles: {
                width: '25px',
                height: '25px',
            }
        },
        ...INITIAL_VIEWPORTS,
    },
  },
});
addParameters({backgrounds: [
    { name: 'black', value: '#000' },
    { name: 'grey', value: '#535353'},
    { name: 'light grey', value: '#bbbbbb', default: true },
    { name: 'white', value: '#fff' },
]});
addDecorator(withLinks);
const themes = [
  {
    name: 'light',
    variables: DesignTokens.light
  },
  {
    name: 'dark',
    variables: DesignTokens.dark
  },
]
addDecorator(withThemesProvider(themes));
