/**
 * DO NOT MODIFY THIS FILE MANUALLY
 * This file is auto-generated via `yarn run generate:icons`
 */

import AppsSvg from './AppsSvg';
import ArrowUpLeftSvg from './ArrowUpLeftSvg';
import CheckmarkSvg from './CheckmarkSvg';
import CogSvg from './CogSvg';
import DownloadSvg from './DownloadSvg';
import FolderSvg from './FolderSvg';
import HeartSvg from './HeartSvg';
import HomeSvg from './HomeSvg';
import LinkSvg from './LinkSvg';
import NightSvg from './NightSvg';
import PinnedSvg from './PinnedSvg';
import ReturnKeySvg from './ReturnKeySvg';
import SearchSvg from './SearchSvg';
import StationSvg from './StationSvg';
import React from 'react';

export enum Icons {
  APPS = 'apps',
  ARROW_UP_LEFT = 'arrow-up-left',
  CHECKMARK = 'checkmark',
  COG = 'cog',
  DOWNLOAD = 'download',
  FOLDER = 'folder',
  HEART = 'heart',
  HOME = 'home',
  LINK = 'link',
  NIGHT = 'night',
  PINNED = 'pinned',
  RETURN_KEY = 'return-key',
  SEARCH = 'search',
  STATION = 'station',
}

type SvgComponents = {
  [key in Icons]: React.SFC<React.SVGProps<SVGSVGElement>>;
};

const SvgIcon: SvgComponents = {
  [Icons.APPS]: AppsSvg,
  [Icons.ARROW_UP_LEFT]: ArrowUpLeftSvg,
  [Icons.CHECKMARK]: CheckmarkSvg,
  [Icons.COG]: CogSvg,
  [Icons.DOWNLOAD]: DownloadSvg,
  [Icons.FOLDER]: FolderSvg,
  [Icons.HEART]: HeartSvg,
  [Icons.HOME]: HomeSvg,
  [Icons.LINK]: LinkSvg,
  [Icons.NIGHT]: NightSvg,
  [Icons.PINNED]: PinnedSvg,
  [Icons.RETURN_KEY]: ReturnKeySvg,
  [Icons.SEARCH]: SearchSvg,
  [Icons.STATION]: StationSvg,
};

export default SvgIcon;
