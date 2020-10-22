import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import {TooltipStyles, TooltipPositions} from './index';
import { StationTheme } from '../../design-system';


type TooltipProps = {
  text: string;
  styles?: TooltipStyles;
  children?: ReactNode;
  className?: string;
  boxClassName?: string;
  textClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type Styles = {
  theme: StationTheme;
  styles: TooltipStyles;
}

const positions = (size: number) => ({
  top: {
    bottom: `calc(100% + ${size}px)`,
    left: '50%',
    transform: 'scale(0) translateX(-50%)',
    transformOrigin: 'bottom left',
  },
  right: {
    left: `calc(100% + ${size}px)`,
    bottom: '50%',
    transform: 'scale(0) translateY(50%)',
    transformOrigin: 'bottom left',
  },
  bottom: {
    top: `calc(100% + ${size}px)`,
    left: '50%',
    transform: 'scale(0) translateX(-50%)',
    transformOrigin: 'top left',
  },
  left: {
    right: `calc(100% + ${size}px)`,
    bottom: '50%',
    transform: 'scale(0) translateY(50%)',
    transformOrigin: 'bottom right',
  }
  });

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    position: 'relative',
    margin: ({ styles }: Styles) => styles?.margin || 0,
    '&:hover $container': {
      opacity: 1,
      // avoid transform override cf: https://stackoverflow.com/questions/32224802/extend-the-final-state-of-the-first-animation-for-translated-element#answers
      transform: ({ styles }: Styles) => (positions(styles?.space || 8)[styles?.position || TooltipPositions.BOTTOM]).transform.replace('0)', '1)'),
      transitionDuration: ({ styles }: Styles) => styles?.duration || 150,
      transitionDelay: ({ styles }: Styles) => styles?.delay || 250
    }
  },
  container: {
    width: 'max-content',
    height: 23,
    position: 'absolute',
    boxSizing: 'border-box',
    zIndex: 1,
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
    backgroundColor: ({ theme, styles }: Styles) => styles?.container?.color || theme.color.backgroundSecondaryDefault,
    border: ({ theme }: Styles) => ['solid', 0.5, theme.color.backgroundSecondaryHover],
    borderRadius: ({ styles }: Styles) => styles?.container?.radius || 3,
    opacity: 0,
    transitionDuration: ({ styles }: Styles) => styles?.exitDuration || 100,
    transitionDelay: 0,
    transitionTimingFunction: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
    padding: ({ styles }: Styles) => styles?.container?.padding || '3px 4px',
    boxShadow: '0 2px 4px 1px rgba(60, 80, 93, 0.08)',
  },
  text: {
    color: ({ theme, styles }: Styles) => styles?.text?.color || theme.color.textPrimaryDefault,
    fontSize: ({ styles }: Styles) => styles?.text?.size || 12,
  },
  position: ({ styles }: Styles) => (positions(styles?.space || 8)[styles?.position || TooltipPositions.BOTTOM])
});

const Tooltip = ({children, text, styles, className, boxClassName, textClassName, onClick}: TooltipProps) => {
  const theme: object | null = useTheme();

  const classes = useStyles({ theme, styles });
  return (
    <div className={classNames(classes.root, className)} onClick={onClick}>
      {children}
      <div className={classNames(classes.container, classes.position, boxClassName)}>
        <p className={classNames(classes.text, textClassName)}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Tooltip;
