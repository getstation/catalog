import {ReactChild} from "react";
import DropdownMenu from './DropdownMenu';
import {Icons} from "../Icon";
import {Images} from "../../assets/images";

export type DropdownMenuProps = {
  /**
   * @name children
   * @type DropdownMenuSlots | any
   * @desc Can be a simple trigger JSX Element OR slotted children object (see `DropdownMenuSlots`)
   */
  children: DropdownMenuSlots | any;
  /**
   * @name items
   * @type DropdownMenuOption[]
   * @desc array of text and optional image/icon used to generate dropdown menu items (possibility to set selected value(s) if using `checkmark` option)
   */
  items?: DropdownMenuOption[];
  /**
   * @name styles
   * @type DropdownMenuStyles
   * @desc Styling options
   */
  styles?: DropdownMenuStyles;
  /**
   * @name checkmark
   * @type boolean
   * @default false
   * @desc is checkmark icon present on `selected = true` items
   */
  checkmark?: boolean;
  /**
   * @name closeOnSelect
   * @type boolean
   * @default false
   * @desc if true, close the menu box on item click
   */
  closeOnSelect?: boolean;
  /**
   * @name onSelect
   * @type function
   * @param e: DropdownMenuOption
   * @desc called on item click with item object passed to param
   */
  opened?: boolean;
  selected?: DropdownMenuOption;
  onSelect?: (e: DropdownMenuOption) => void;
  /**
   * @name className
   * @type string
   * @desc root container css class name
   */
  className?: string;
  /**
   * @name itemClassName
   * @type string
   * @desc item css class name
   */
  itemClassName?: string;
  /**
   * @name listClassName
   * @type string
   * @desc content box css class name
   */
  listClassName?: string;
};


export type DropdownMenuSlots = {
  trigger?: ReactChild;
  items?: ReactChild[];
};

export type DropdownMenuOption = {
  icon?: Icons;
  image?: Images | string;
  text: string;
  selected?: boolean;
};

export type DropdownMenuStyles = {
  /**
   * @name duration
   * @default 100
   * @desc entry animation duration (in milliseconds)
   */
  duration?: number | string;
  /**
   * @name space
   * @default 2
   * @desc space between trigger and content box
   */
  space?: number;
  /**
   * @name margin
   * @default 0
   * @desc margin of the root container, will not trigger the DropdownMenu
   */
  margin?: (string | number)[] | string | number;
  /**
   * @name padding
   * @default 0
   * @desc padding of the root container
   */
  padding?: (string | number)[] | string | number;
  /**
   * @name items
   * @desc styles of content box
   */
  items?: {
    /**
     * @name color
     * @default theme.color.backgroundSecondaryDefault
     * @desc background-color of content box
     */
    color?: string;
    /**
     * @name radius
     * @default 6
     * @desc border radius of content box
     */
    radius?: (string | number)[] | string | number;
    /**
     * @name padding
     * @default '5px 0'
     * @desc padding of content box
     */
    padding?: string | number;
  },
  /**
   * @name item
   * @desc styles of each list item
   */
  item?: {
    /**
     * @name color
     * @default theme.color.textPrimaryDefault
     * @desc color of text
     */
    color?: string;
    /**
     * @name size
     * @default 14
     * @desc font-size of text
     */
    size?: number | string;
  },
};

export default DropdownMenu;
export * from './DropdownMenu';
