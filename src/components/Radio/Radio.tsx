import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import Colors from './../Colors';

export type RadioProps = {
  className?: string;
  choiceClassName?: string;
  name: string;
	choices?: Choice[];
	selected?: Choice;
	onSelect: (choice: Choice, event: React.MouseEvent<HTMLDivElement>) => void;
};

export type Choice = {
  text: string,
  value: any,
  id: string,
  icon?: string,
};

const useStyles = createUseStyles({
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
  box: {
    '&:after': {
      top: 1.5,
      left: -12.5,
      width: 12,
      height: 12,
      borderRadius: 12,
      position: 'relative',
      backgroundColor: Colors.lightPrimaryBackgroundColor,
      content: '""',
      display: 'inline-block',
      visibility: 'visible',
      border: [1, 'solid', Colors.lightSecondaryTextColor],
      boxSizing: 'border-box',
    },
    '&:before': {
      top: -0.5,
      left: 10.5,
      width: 8,
      height: 8,
      borderRadius: 8,
      position: 'relative',
      backgroundColor: Colors.lightPrimaryColor,
      content: '""',
      display: 'inline-block',
      visibility: 'visible',
    },
    '&[data-checked="true"]': {
      '&:after': {
        borderColor: Colors.lightPrimaryColor,
      },
      '&:before': {
        zIndex: 1,
      },
    },
  },
  input: {
    visibility: 'hidden',
    margin: [10, 0],
  },
  label: {
    fontSize: 13,
    fontWeight: 600,
    color: Colors.lightPrimaryTextColor,
  },
});

const Radio = ({ name, selected, choices, onSelect, className, choiceClassName }: RadioProps) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, className)}>
      {choices?.map(choice => (
        <div className={classNames(classes.choice, choiceClassName)} key={choice.id}>
          <div className={classes.box} onClick={e => onSelect(choice, e)} data-checked={choice.id === selected?.id}>
            <input type="radio"
                 id={choice.id}
                 className={classes.input}
                 name={name}
                 value={choice.value}
                 checked={choice.id === selected?.id}
                 readOnly
            />
          </div>
          <label htmlFor={choice.id} className={classes.label}>{choice.text}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
