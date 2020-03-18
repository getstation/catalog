import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select, text } from '@storybook/addon-knobs';

import Icon, { Icons } from '@components/Icon';

storiesOf('Components|Icon', module)
	.addParameters({ options: { selectedPanel: 'storybook/Icon' } })
	.add('Icon (with icon from iconset)', () => (
		<Icon
			icon={select('icon', Object.values(Icons) as Icons[], Icons.STATION)}
			color={text('color', '#3c505d')}
			size={number('size', 250)}
		/>
	))
	// @ts-ignore
	.add('All icons', () => {
		const allColor = text('color', '#3c505d');
		const allSize = number('size', 30);
		return Object.values(Icons).map((x: string, i: number) => (
			<Icon key={i} icon={x as Icons} size={allSize} color={allColor} />
		));
	});
