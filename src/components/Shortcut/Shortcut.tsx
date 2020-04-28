import * as React from 'react';
import classNames from "classnames";
import { createUseStyles } from 'react-jss';

import Colors from "../Colors";

type ShortcutProps = {
  className?: string;
  keyClassName?: string;
  size?: number;
  keys: (Key | string)[] | Key | string;
  OsxToPcMap?: {};
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

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    '& kbd:not(:last-child)': {
      marginRight: (size: number) => size / 8.33 || 3
    }
  },
  key: {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    minWidth: (size: number) => size || 25,
    height: (size: number) => size || 25,
    backgroundColor: Colors.lightSecondaryBackgroundColor,
    color: Colors.lightSecondaryTextColor,
    fontSize: (size: number) => size * 0.6 || 15,
    border: (size: number) => `${(size / 25) || 1}px solid ${Colors.lightTertiaryBackgroundColor}`,
    borderRadius: (size: number) => size / 6.25 || 4,
    fontWeight: 600,
  },
  padding: (size: number) => ({
    padding: [0, ((size / 5) || 5)],
  }),
});

export const Shortcut = ({ keys, size, OsxToPcMap = OsxToPc, className, keyClassName }: ShortcutProps) => {
  const classes = useStyles(size);
  const isOSX = navigator.platform.indexOf('Mac') > -1;
  return (
    <div className={classNames(classes.container, className)}>
      {[...(keys instanceof Array) ? keys : [keys]].map(key => {
        const platformKey = isOSX ? key : (OsxToPcMap[key] || key);
        return <kbd className={classNames(classes.key, (platformKey.length > 1) && classes.padding, keyClassName)}>{platformKey}</kbd>
      })}
    </div>
  );
};

export default Shortcut;
