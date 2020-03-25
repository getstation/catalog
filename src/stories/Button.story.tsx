import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button from '@components/Button';
import { Images } from '@src/assets/images';

storiesOf('Components|Button', module)
	.addParameters({ options: { selectedPanel: 'storybook/Button' } })
	.add('Application (Team hub)', () => (
		<Button
			icon={text('icon', 'https://zeplin.io/img/favicon/228x228.png')}
			text={text('text', 'Zeplin')}
			subtext={text('subtext', "Design & Creativity")}
			selected={boolean('selected', false)}
			onClick={e => action('onButtonClicked')(e)}
		/>
	),
	{
		centered: { disable: true },
	})
	.add('Category (Team hub)', () => (
			<Button
				icon={text('icon', Images.COMPANY)}
				text={text('text', 'Internal Tools')}
				subtext={text('subtext', '')}
				selected={boolean('selected', false)}
				onClick={e => action('onButtonClicked')(e)}
			/>
		),
		{
			centered: { disable: true },
		});
