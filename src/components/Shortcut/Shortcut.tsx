import * as React from 'react';
import classNames from "classnames";
import { createUseStyles } from 'react-jss';


import { StationTheme } from '../../design-system';

type ShortcutProps = {
  className?: string;
  keyClassName?: string;
  separatorClassName?: string;
  size?: number;
  keys: (Key | string)[] | Key | string;
  OsxToPcMap?: {};
  separator?: string;
};

export enum Key {
  RETURN = '↵', // OSX '↩' WIN '↵'
  COMMAND = '⌘',
  CMD = 'CMD',
  WIN = 'Win',
  OPTION = '⌥',
  BACKSPACE = '⌫',
  RIGHT = '→',
  LEFT = '←',
  UP = '↑',
  DOWN = '↓',
  SHIFT = '⇧',
  CAPS_LOCK = '⇪',
  CTRL = 'Ctrl',
  CONTROL = '⌃',
  NUM = '0-9',
  SPACE = 'Space',
  SPACEBAR = '⎵',
  ESC = 'ESC',
  ESCAPE = '⎋',
  TAB = '⇥', // OTHER '↹' OR '↦'
  HOME = '⇞',
  END = '⇟',

}

export const OsxToPc = {
  [Key.COMMAND]: 'Alt',
  [Key.OPTION]: Key.WIN,
  [Key.CONTROL]: Key.CTRL,
  [Key.ESCAPE]: Key.ESC
}

const useStyles = createUseStyles((theme: StationTheme) => ({
  container: {
    display: 'flex',
    color: theme.color.textSecondaryDefault,
    fontSize: (size: number) => size * 0.6,
    '& kbd:not(:last-child)': {
      marginRight: (size: number) => size / 8.33
    },
    '& > *': {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol'
      ],
    }
  },
  key: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: (size: number) => size,
    height: (size: number) => size,
    fontWeight: 600,
    backgroundColor: theme.color.backgroundSecondaryDefault,
    border: (size: number) => `${size / 25}px solid ${theme.color.backgroundSecondaryHover}`,
    borderRadius: (size: number) => size / 6.25,
  },
  padding: (size: number) => ({
    padding: [0, size / 5],
  }),
  separator: {
    margin: [0, 6, 0, 4],
    fontWeight: 500,
    alignSelf: 'center',
  }
  }));

export const Shortcut = ({ keys, size = 25, OsxToPcMap = OsxToPc, className, keyClassName, separatorClassName, separator = 'or' }: ShortcutProps) => {
  const classes = useStyles(size);
  const isOSX = navigator.platform.indexOf('Mac') > -1;
  return (
    <div className={classNames(classes.container, className)}>
      {[...(keys instanceof Array) ? keys : [keys]].map((key, index) => {
        const platformKey = isOSX ? key : (OsxToPcMap[key] || key);
        return (platformKey === separator)
          ? <span key={index} className={classNames(classes.separator, separatorClassName)}>{platformKey}</span>
          : <kbd key={index} className={classNames(classes.key, (platformKey.length > 1) && classes.padding, keyClassName)}>{platformKey}</kbd>
      })}
    </div>
  );
};

export default Shortcut;
