import React, {ReactChild} from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import Image from '../Image';
import Colors from '../Colors';

type ButtonProps = {
  children?: ButtonSlots | any;
  icon?: string;
  text?: string;
  subtext?: string;
  color?: string;
  selected?: boolean;
  onClick: (e: string) => void;
  className?: string;
};

type ButtonSlots = {
  trigger?: ReactChild;
  items?: ReactChild[];
};

const useStyles = createUseStyles({
  button: {
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
    border: 'none',
    padding: 0,
    backgroundColor: (props: ButtonProps) => Colors[props.selected ? 'lightTertiaryBackgroundColor' : 'lightPrimaryBackgroundColor'],
    height: (props: ButtonProps) => props.subtext ? 60 : 29,
    width: '100%',
    borderRadius: 30,
    boxSizing: 'border-box',
    outline: 'none',
    '&:hover, &:focus, &:active': {
      backgroundColor: Colors.lightTertiaryBackgroundColor,
      '& $text': {
        color: Colors.lightPrimaryTextColor
      }
    },
    '&:focus:not(:hover)': {
      filter: 'brightness(0.9)' // TODO specify stytle for pressed state
    }
  },
  image: {
    height: (props: ButtonProps) => props.subtext ? 60 : 29,
    width: (props: ButtonProps) => props.subtext ? 60 : 44,
    '&>img': {
      padding: (props: ButtonProps) => props.subtext ? '15px 10px 15px 20px' : '3px 8px 3px 12px',
      boxSizing: 'border-box'
    }
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  text: {
    color: (props: ButtonProps) => Colors[props.subtext || props.selected ? 'lightPrimaryTextColor' : 'lightSecondaryTextColor'],
    fontSize: 14,
    fontWeight: (props: ButtonProps) => props.subtext ? 600 : 500
  },
  subtext: {
    color: Colors.lightSecondaryTextColor,
    fontSize: 12,
    marginTop: 2
  }
});
const Button = ({ children, icon, text, subtext, onClick, className, selected }: ButtonProps) => {
  const classes = useStyles({subtext, selected});

  return (
    <div onClick={(_) => onClick(text || '')} className={classNames(classes.button, className)}>
      {children?.left ? children.left : <Image image={icon || ''} className={classes.image} />}
      {children?.main ? children.main : <div className={classes.texts}>
        <span className={classes.text}>{text}</span>
        {subtext && <span className={classes.subtext}>{subtext}</span>}
      </div>}
      {children?.right || children}
    </div>
  );
};

export default Button;
