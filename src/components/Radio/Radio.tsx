import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import classNames from 'classnames';

import { StationTheme } from '../../design-system';

export type RadioProps = {
  className?: string;
  choiceClassName?: string;
  name: string;
	choices?: Choice[];
	selected?: string;
	onSelect: (choice: string, event: React.MouseEvent<HTMLInputElement>) => void;
};

export type Choice = {
  text: string,
  value: any,
  id: string,
  icon?: string,
};

const useStyles = createUseStyles((theme: StationTheme) => ({
  root: {
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
      'Segoe UI Symbol',
    ],
  },
  choice: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    visibility: 'hidden',
    margin: [10, 14, 10, 0],
    '&:after': {
      top: -15,
      left: 1,
      width: 12,
      height: 12,
      borderRadius: 12,
      position: 'relative',
      backgroundColor: theme.color.backgroundPrimaryDefault,
      content: '""',
      display: 'inline-block',
      visibility: 'visible',
      border: [1, 'solid', theme.color.textSecondaryDefault],
      boxSizing: 'border-box',
    },
    '&:before': {
      top: -2,
      left: 3,
      width: 8,
      height: 8,
      borderRadius: 8,
      position: 'relative',
      backgroundColor: theme.color.brandPrimaryDefault,
      content: '""',
      display: 'inline-block',
      visibility: 'visible',
    },
    '&:checked:after': {
      borderColor: theme.color.brandPrimaryDefault,
    },
    '&:checked:before': {
      zIndex: 1,
    }
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: theme.color.textPrimaryDefault,
  },
}));

const Radio = ({ name, selected, choices, onSelect, className, choiceClassName }: RadioProps) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      {choices?.map(choice => (
        <div className={classNames(classes.choice, choiceClassName)} key={choice.id}>
          <input type="radio"
                 id={choice.id}
                 className={classes.input}
                 name={name}
                 value={choice.value}
                 checked={choice.id === selected}
                 onClick={e => onSelect(choice.id, e)}
          />
          <label htmlFor={choice.id} className={classes.label}>{choice.text}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
