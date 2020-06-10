import classNames from 'classnames';
import React, {ReactChild} from 'react';
import color from 'color';
import { createUseStyles } from 'react-jss';
import Icon, { Icons } from '../Icon';
import Image from '../Image';
import Colors from '../Colors';
import fallback from './favicon-placeholder.svg';

type ListItemProps = {
  children?: ReactChild | ReactChild[];
  onClick: (e: string) => void;
  className?: string;
  favIconUrl?: string | null;
  title: string;
  url: string;
  subtitle: string;
  type?: string;
  isRecent?: boolean;
  isTeamhub?: boolean;
  isSelected?: boolean;
};

const useStyles = createUseStyles({
    ListItem: {
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
      width: '100%',
      height: (isRecent: boolean) => isRecent ? 42 : 53,
      backgroundColor: Colors.lightPrimaryBackgroundColor,
      listStyle: 'none',
      display: 'flex',
      outline: 'none',
      '&:hover, &:focus, &:active': {
        backgroundColor: Colors.lightPrimaryHoverBackgroundColor
      },
      '&:focus:not(:hover), &.selected': {
        backgroundColor: Colors.lightPrimaryFocusBackgroundColor,
        '& $title': {
          maxWidth: '100%'
        },
        '&>$icon': {
          visibility: 'inherit',
          display: 'flex',
          alignItems: 'center'
        },
        '&>$arrow': {
          visibility: 'hidden',
          display: 'none'
        }
      }
    },
    item: {
      padding: [3, 0],
      fontSize: 12,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: (isRecent: boolean) => `space-${isRecent ? 'around' : 'evenly'}`,
      alignItems: 'flex-start',
      flexGrow: 1,
      overflow: 'hidden'
    },
    appIcon: {
      width: (isRecent: boolean) => isRecent ? 42 : 72,
      minWidth: (isRecent: boolean) => isRecent ? 42 : 72,
      marginRight: (isRecent: boolean) => isRecent ? 5 : 'inherit',
      padding: (isRecent: boolean) => isRecent ? [5, 5, 20, 20] : [17, 20, 16, 32],
      boxSizing: 'border-box'
    },
    title: {
      display: 'flex',
      color: Colors.lightPrimaryTextColor,
      fontSize: (isRecent: boolean) => isRecent ? 12 : 13,
      fontWeight: (isRecent: boolean) => isRecent ? 'normal' : 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '95%'
    },
    appName: {
      color: Colors.lightSecondaryTextColor,
      fontSize: (isRecent: boolean) => isRecent ? 10 : 11,
      fontWeight: 600,
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '70%',
      '&>a': {
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'italic',
        letterSpacing: 0,
        color: Colors.lightPrimaryLinkColor,
        textDecoration: 'none',
        outline: 'none'
      }
    },
    icon: {
      display: 'none',
      visibility: 'hidden',
      marginRight: (isRecent: boolean) => isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrow: {
      display: 'inherit',
      visibility: 'inherit',
      marginRight: (isRecent: boolean) => isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrowIcon: {
      width: 8
    },
    returnKey: {
      display: 'flex',
      border: [1, 'solid', color(Colors.lightPrimaryTextColor).fade(0.8).string()],
      borderRadius: 2,
      width: 10,
      height: 10,
      padding: 3
    },
    tab: {
      marginLeft: 12,
      width: 8,
      '& svg': {
        fill: Colors.lightPrimaryTextColor,
      }
    }
  });
const ListItem = (props: ListItemProps) => {
  const { children, url, favIconUrl, isRecent = false, isTeamhub = false, type, title, subtitle, onClick, isSelected } = props;
  const classes = useStyles(isRecent);
  const className = classNames(classes.ListItem, { selected: isSelected });

  return (
    <li title={url} className={className} onClick={() => onClick(url)} tabIndex={-1}>
      <Image image={favIconUrl || fallback} className={classes.appIcon} />
      <div className={classes.item}>
        <span className={classes.title}>{title}{isTeamhub && type === 'TAB' && <Icon icon={Icons.ARROW_UP_LEFT} className={classes.tab}/>}</span>
        <span className={classes.appName}>
          {subtitle}
          {isRecent && type === 'TAB' && (
            <a href={url} tabIndex={-1} onClick={(e) => e.preventDefault()}>
              {' - open'}
            </a>
          )}
        </span>
      </div>
      <div className={classes.icon}>
        <Icon icon={Icons.RETURN_KEY} color={Colors.lightSecondaryTextColor} className={classes.returnKey} />
      </div>
      {children}
      {!isTeamhub && !isRecent && type === 'TAB' && (
        <div className={classes.arrow}>
          <Icon icon={Icons.ARROW_UP_LEFT} className={classes.arrowIcon} />
        </div>
      )}
    </li>
  );
};

export default ListItem;
