import React, {ReactChild} from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import Image from '../Image';
import { StationTheme } from '../../design-system';

type ButtonProps = {
  children?: ButtonSlots | any;
  icon?: string;
  text?: string;
  subtext?: string;
  color?: string;
  selected?: boolean;
  onClick: (e: string) => void;
  className?: string;
  variant?: string;
};

type ButtonSlots = {
  trigger?: ReactChild;
  items?: ReactChild[];
};

const useStyles = createUseStyles((theme: StationTheme) => ({
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
    border: (props: ButtonProps) => props.variant === 'primary' ? 'none' : `solid 1px ${theme.color.borderTertiaryDefault}`,
    padding: (props: ButtonProps) => props.icon ? 0 : '0 11px',
    backgroundColor: (props: ButtonProps) => theme.color[props.selected ? 'backgroundSecondaryHover' : 'backgroundPrimaryDefault'],
    height: (props: ButtonProps) => props.subtext ? 60 : 24,
    width: '100%',
    borderRadius: 3,
    boxSizing: 'border-box',
    outline: 'none',
    '&:hover, &:focus, &:active': {
      backgroundColor: theme.color.backgroundSecondaryHover,
      '& $text': {
        color: theme.color.textPrimaryDefault
      }
    },
    '&:focus:not(:hover)': {
      filter: 'brightness(0.9)' // TODO specify style for pressed state
    }
  },
  image: {
    height: (props: ButtonProps) => props.subtext ? 60 : 24,
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
    color: (props: ButtonProps) => theme.color[props.subtext || props.selected ? 'textPrimaryDefault' : 'textSecondaryDefault'],
    fontSize: 14,
    fontWeight: (props: ButtonProps) => props.subtext ? 600 : 500
  },
  subtext: {
    color: theme.color.textSecondaryDefault,
    fontSize: 12,
    marginTop: 2
  }
  }));

const Button = ({ children, icon, text, subtext, onClick, className, selected, variant = 'primary' }: ButtonProps) => {
  const classes = useStyles({subtext, selected, variant, icon});

  return (
    <div onClick={(_) => onClick(text || '')} className={classNames(classes.button, className)}>
      {children?.left ? children.left : icon ? <Image image={icon} className={classes.image} /> : null}
      {children?.main ? children.main : <div className={classes.texts}>
        <span className={classes.text} title={text}>{text}</span>
        {subtext && <span className={classes.subtext} title={subtext}>{subtext}</span>}
      </div>}
      {children?.right || children}
    </div>
  );
};

export default Button;
