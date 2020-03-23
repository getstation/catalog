import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import AppItem from '@components/AppItem';

storiesOf('Components|AppItem', module)
	.addParameters({ options: { selectedPanel: 'storybook/AppItem' } })
	.add('Recent', () => (
		<AppItem
			icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')}
			name={text('name', 'Zeplin')}
			category={text('category', "Design & Creativity")}
			onClick={e => action('onAppItemClicked')(e)}
		/>
	),
	{
		centered: { disable: true },
	});
