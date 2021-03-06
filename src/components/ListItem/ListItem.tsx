import classNames from 'classnames';
import React, {ReactChild} from 'react';
import color from 'color';
import { createUseStyles, useTheme } from 'react-jss';
import Icon, { Icons } from '../Icon';
import Image from '../Image';
import fallback from './favicon-placeholder.svg';
import { StationTheme } from '../../design-system';

type ListItemProps = {
  children?: ReactChild | ReactChild[];
  onClick: (url: string, e: React.MouseEvent<HTMLLIElement>) => void;
  className?: string;
  favIconClassName?: string;
  appIconClassName?: string;
  favIconUrl?: string | null;
  appIconUrl?: string | null;
  title: string;
  url: string;
  subtitle: string;
  account?: string;
  type?: string;
  isRecent?: boolean;
  isTeamhub?: boolean;
  isSelected?: boolean;
};

const useStyles = (isRecent: boolean) =>
  createUseStyles((theme: StationTheme) => ({
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
      height: isRecent ? 42 : 53,
      backgroundColor: theme.color.backgroundPrimaryDefault,
      listStyle: 'none',
      display: 'flex',
      outline: 'none',
      '&:hover, &:focus, &:active': {
        backgroundColor: theme.color.backgroundPrimaryHover
      },
      '&:focus:not(:hover), &.selected': {
        backgroundColor: theme.color.backgroundPrimaryFocus,
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
      justifyContent: `space-${isRecent ? 'around' : 'evenly'}`,
      alignItems: 'flex-start',
      flexGrow: 1,
      overflow: 'hidden'
    },
    favIcon: {
      height: 53,
      width: isRecent ? 42 : 72,
      minWidth: isRecent ? 42 : 72,
      marginRight: isRecent ? 5 : 'inherit',
      padding: isRecent ? [5, 5, 20, 20] : [17, 20, 16, 32],
      boxSizing: 'border-box'
    },
    appIcon: {
      width: 16,
      height: 16,
      position: 'absolute',
      bottom: 8,
      right: 12,
      borderRadius: 10,
      boxSizing: 'border-box',
      border: [2, 'solid', 'white'],
      display: 'flex',
      backgroundColor: 'white',
    },
    title: {
      display: 'flex',
      color: theme.color.textPrimaryDefault,
      fontSize: isRecent ? 12 : 13,
      fontWeight: isRecent ? 'normal' : 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '95%'
    },
    appName: {
      display: 'flex',
      alignItems: 'center',
      color: theme.color.textSecondaryDefault,
      fontSize: isRecent ? 10 : 11,
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: 0,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      '&>a': {
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'italic',
        letterSpacing: 0,
        color: theme.color.brandPrimaryDefault,
        textDecoration: 'none',
        outline: 'none'
      }
    },
    appLabel: {
      color: theme.color.textSecondaryDefault,
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: 0,
      whiteSpace: 'nowrap',
    },
    icon: {
      display: 'none',
      visibility: 'hidden',
      marginRight: isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrow: {
      display: 'inherit',
      visibility: 'inherit',
      marginRight: isRecent ? 20 : 30,
      marginLeft: 10
    },
    arrowIcon: {
      width: 8
    },
    returnKey: {
      display: 'flex',
      border: [1, 'solid', color(theme.color.textPrimaryDefault).fade(0.8).string()],
      borderRadius: 2,
      width: 10,
      height: 10,
      padding: 3
    },
    tab: {
      marginLeft: 12,
      width: 8,
      '& svg': {
        fill: theme.color.textPrimaryDefault,
      }
    }
  }));
const ListItem = (props: ListItemProps) => {
  const { children, url, favIconUrl, appIconUrl, isRecent = false, isTeamhub = false, type, title, subtitle, account, onClick, isSelected } = props;
  const theme: any = useTheme();
  const classes = useStyles(isRecent)();
  const className = classNames(classes.ListItem, { selected: isSelected }, props.className);

  return (
    <li title={url} className={className} onClick={(e) => onClick(url, e)} tabIndex={-1}>
      <div style={{position: 'relative'}}>
        <Image image={favIconUrl || fallback} className={classNames(classes.favIcon, props.favIconClassName)} />
        {appIconUrl && <Image image={appIconUrl} className={classNames(classes.appIcon, props.appIconClassName)} />}
      </div>
      <div className={classes.item}>
        <span className={classes.title}>
          {title}{account && <b className={classes.appName}>&nbsp;- {account}</b>}
          {isTeamhub && type === 'TAB' && <Icon icon={Icons.ARROW_UP_LEFT} className={classes.tab}/>}
        </span>
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
        <Icon icon={Icons.RETURN_KEY} color={theme.color.textSecondaryDefault} className={classes.returnKey} />
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
