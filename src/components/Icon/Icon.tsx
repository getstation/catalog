import { styled } from 'linaria/react';
import React from 'react';
import classNames from 'classnames';
import SvgIcon, { Icons } from './svg';

const px = (x: number | string | undefined) => x + 'px';

type IconProps = {
	icon: Icons;
	size?: number | string;
	color?: string;
	className?: string;
	onClick?: (icon: Icons) => void;
};

const IconContainer = styled.div`
  font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  width: ${(props: IconProps) => px(props.size) || 'auto'};
  height: ${(props: IconProps) => px(props.size) || 'auto'};

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${(props: IconProps) => props.color || 'black'};
  }
`;

const Icon = (props: IconProps) => {
	const Svg = SvgIcon[props.icon];

	return (
		<IconContainer {...props} className={classNames(props.className)} onClick={() => props.onClick && props.onClick(props.icon)}>
			<Svg />
		</IconContainer>
	);
};

export default React.memo(Icon);
