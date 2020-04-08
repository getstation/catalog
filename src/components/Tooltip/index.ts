import Tooltip from './Tooltip';

export enum TooltipPositions {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

export type TooltipStyles = {
  /**
   * @name duration
   * @default 150
   * @desc entry animation duration (in milliseconds)
   */
  duration?: number | string;
  /**
   * @name exitDuration
   * @default 100
   * @desc exit animation duration (in milliseconds)
   */
  exitDuration?: number | string;
  /**
   * @name delay
   * @default 100
   * @desc delay until entry animation when hover (in milliseconds)
   */
  delay?: number | string;
  /**
   * @name position
   * @default TooltipPositions.BOTTOM
   * @desc position of the tooltip compared to children
   */
  position?: TooltipPositions;
  /**
   * @name space
   * @default 8
   * @desc space between tooltip and children
   */
  space?: number;
  /**
   * @name margin
   * @default 0
   * @desc margin of the root container, will not trigger the tooltip
   */
  margin?: (string | number)[] | string | number;
  /**
   * @name container
   * @desc styles of tooltip box
   */
  container?: {
    /**
     * @name color
     * @default Colors.lightTertiaryBackgroundColor
     * @desc background-color of the tooltip box
     */
    color?: string;
    /**
     * @name color
     * @default 3
     * @desc border radius of the tooltip box
     */
    radius?: (string | number)[] | string | number;
    /**
     * @name padding
     * @default '3px 4px'
     * @desc padding of the tooltip (will not change text size)
     */
    padding?: (string | number)[] | string | number;
  },
  /**
   * @name text
   * @desc styles of tooltip text
   */
  text?: {
    /**
     * @name color
     * @default Colors.lightPrimaryTextColor
     * @desc color of the tooltip text
     */
    color?: string;
    /**
     * @name size
     * @default 14
     * @desc font-size of the tooltip text
     */
    size?: number | string;
  },
};

export default Tooltip;
export * from './Tooltip';
