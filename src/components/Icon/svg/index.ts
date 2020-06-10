import React from 'react';
import AppsSvg from './AppsSvg';
import ArchiveSvg from './ArchiveSvg';
import ArrowUpLeftSvg from './ArrowUpLeftSvg';
import ArrowsUpDownSvg from './ArrowsUpDownSvg';
import BoardSvg from './BoardSvg';
import BranchSvg from './BranchSvg';
import ChannelSvg from './ChannelSvg';
import ChatSvg from './ChatSvg';
import CheckmarkSvg from './CheckmarkSvg';
import CodeSvg from './CodeSvg';
import CogSvg from './CogSvg';
import CrossSvg from './CrossSvg';
import DocSvg from './DocSvg';
import DownloadSvg from './DownloadSvg';
import DropdownSvg from './DropdownSvg';
import EditorSvg from './EditorSvg';
import ExtensionSvg from './ExtensionSvg';
import FileSvg from './FileSvg';
import FolderSvg from './FolderSvg';
import GraphSvg from './GraphSvg';
import HeartSvg from './HeartSvg';
import HomeSvg from './HomeSvg';
import IssueSvg from './IssueSvg';
import LinkSvg from './LinkSvg';
import LogoutSvg from './LogoutSvg';
import NightSvg from './NightSvg';
import OptionsSvg from './OptionsSvg';
import PageSvg from './PageSvg';
import PinnedSvg from './PinnedSvg';
import PlusSvg from './PlusSvg';
import PrSvg from './PrSvg';
import ReturnKeySvg from './ReturnKeySvg';
import SearchSvg from './SearchSvg';
import SheetSvg from './SheetSvg';
import SlideSvg from './SlideSvg';
import StationSvg from './StationSvg';
import ThunderSvg from './ThunderSvg';
import TrashSvg from './TrashSvg';

export enum Icons {
  APPS = 'apps',
  ARCHIVE = 'archive',
  ARROW_UP_LEFT = 'arrow-up-left',
  ARROWS_UP_DOWN = 'arrows-up-down',
  BOARD = 'board',
  BRANCH = 'branch',
  CHANNEL = 'channel',
  CHAT = 'chat',
  CHECKMARK = 'checkmark',
  CODE = 'code',
  COG = 'cog',
  CROSS = 'cross',
  DOC = 'doc',
  DOWNLOAD = 'download',
  DROPDOWN = 'dropdown',
  EDITOR = 'editor',
  EXTENSION = 'extension',
  FILE = 'file',
  FOLDER = 'folder',
  GRAPH = 'graph',
  HEART = 'heart',
  HOME = 'home',
  ISSUE = 'issue',
  LINK = 'link',
  LOGOUT = 'logout',
  NIGHT = 'night',
  OPTIONS = 'options',
  PAGE = 'page',
  PINNED = 'pinned',
  PLUS = 'plus',
  PR = 'pr',
  RETURN_KEY = 'return-key',
  SEARCH = 'search',
  SHEET = 'sheet',
  SLIDE = 'slide',
  STATION = 'station',
  THUNDER = 'thunder',
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
  [Icons.BOARD]: BoardSvg,
  [Icons.BRANCH]: BranchSvg,
  [Icons.CHANNEL]: ChannelSvg,
  [Icons.CHAT]: ChatSvg,
  [Icons.CHECKMARK]: CheckmarkSvg,
  [Icons.CODE]: CodeSvg,
  [Icons.COG]: CogSvg,
  [Icons.CROSS]: CrossSvg,
  [Icons.DOC]: DocSvg,
  [Icons.DOWNLOAD]: DownloadSvg,
  [Icons.DROPDOWN]: DropdownSvg,
  [Icons.EDITOR]: EditorSvg,
  [Icons.EXTENSION]: ExtensionSvg,
  [Icons.FILE]: FileSvg,
  [Icons.FOLDER]: FolderSvg,
  [Icons.GRAPH]: GraphSvg,
  [Icons.HEART]: HeartSvg,
  [Icons.HOME]: HomeSvg,
  [Icons.ISSUE]: IssueSvg,
  [Icons.LINK]: LinkSvg,
  [Icons.LOGOUT]: LogoutSvg,
  [Icons.NIGHT]: NightSvg,
  [Icons.OPTIONS]: OptionsSvg,
  [Icons.PAGE]: PageSvg,
  [Icons.PINNED]: PinnedSvg,
  [Icons.PLUS]: PlusSvg,
  [Icons.PR]: PrSvg,
  [Icons.RETURN_KEY]: ReturnKeySvg,
  [Icons.SEARCH]: SearchSvg,
  [Icons.SHEET]: SheetSvg,
  [Icons.SLIDE]: SlideSvg,
  [Icons.STATION]: StationSvg,
  [Icons.THUNDER]: ThunderSvg,
  [Icons.TRASH]: TrashSvg,
};

export default SvgIcon;
