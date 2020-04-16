import React from 'react';
import AppsSvg from './AppsSvg';
import ArchiveSvg from './ArchiveSvg';
import ArrowUpLeftSvg from './ArrowUpLeftSvg';
import ArrowsUpDownSvg from './ArrowsUpDownSvg';
import CheckmarkSvg from './CheckmarkSvg';
import CogSvg from './CogSvg';
import CrossSvg from './CrossSvg';
import DownloadSvg from './DownloadSvg';
import DropdownSvg from './DropdownSvg';
import EditorSvg from './EditorSvg';
import FolderSvg from './FolderSvg';
import HeartSvg from './HeartSvg';
import HomeSvg from './HomeSvg';
import LinkSvg from './LinkSvg';
import LogoutSvg from './LogoutSvg';
import NightSvg from './NightSvg';
import OptionsSvg from './OptionsSvg';
import PinnedSvg from './PinnedSvg';
import PlusSvg from './PlusSvg';
import ReturnKeySvg from './ReturnKeySvg';
import SearchSvg from './SearchSvg';
import StationSvg from './StationSvg';
import TrashSvg from './TrashSvg';

export enum Icons {
  APPS = 'apps',
  ARCHIVE = 'archive',
  ARROW_UP_LEFT = 'arrow-up-left',
  ARROWS_UP_DOWN = 'arrows-up-down',
  CHECKMARK = 'checkmark',
  COG = 'cog',
  CROSS = 'cross',
  DOWNLOAD = 'download',
  DROPDOWN = 'dropdown',
  EDITOR = 'editor',
  FOLDER = 'folder',
  HEART = 'heart',
  HOME = 'home',
  LINK = 'link',
  LOGOUT = 'logout',
  NIGHT = 'night',
  OPTIONS = 'options',
  PINNED = 'pinned',
  PLUS = 'plus',
  RETURN_KEY = 'return-key',
  SEARCH = 'search',
  STATION = 'station',
  TRASH = 'trash',
}

type SvgComponents = {
  [key in Icons]: React.SFC<React.SVGProps<SVGSVGElement>>;
};

const SvgIcon: SvgComponents = {
  [Icons.APPS]: AppsSvg,
  [Icons.ARCHIVE]: ArchiveSvg,
  [Icons.ARROW_UP_LEFT]: ArrowUpLeftSvg,
  [Icons.ARROWS_UP_DOWN]: ArrowsUpDownSvg,
  [Icons.CHECKMARK]: CheckmarkSvg,
  [Icons.COG]: CogSvg,
  [Icons.CROSS]: CrossSvg,
  [Icons.DOWNLOAD]: DownloadSvg,
  [Icons.DROPDOWN]: DropdownSvg,
  [Icons.EDITOR]: EditorSvg,
  [Icons.FOLDER]: FolderSvg,
  [Icons.HEART]: HeartSvg,
  [Icons.HOME]: HomeSvg,
  [Icons.LINK]: LinkSvg,
  [Icons.LOGOUT]: LogoutSvg,
  [Icons.NIGHT]: NightSvg,
  [Icons.OPTIONS]: OptionsSvg,
  [Icons.PINNED]: PinnedSvg,
  [Icons.PLUS]: PlusSvg,
  [Icons.RETURN_KEY]: ReturnKeySvg,
  [Icons.SEARCH]: SearchSvg,
  [Icons.STATION]: StationSvg,
  [Icons.TRASH]: TrashSvg,
};

export default SvgIcon;
