import React from 'react';
import color from 'color';
import {storiesOf} from '@storybook/react';
import {number, select, text} from '@storybook/addon-knobs';


import Tooltip, {TooltipPositions} from '@components/Tooltip';
import Icon, {Icons} from "@components/Icon";

import {createUseStyles} from "react-jss";
import DesignTokens, { StationTheme } from '@src/design-system';

storiesOf('Components|Tooltip', module)
  .addParameters({options: {selectedPanel: 'storybook/Tooltip'}})
  .add('Basic', () => {
    const useStyle = createUseStyles({
      icon: {
        padding: 13,
        margin: 8,
        zIndex: 1,
        backgroundColor: color(DesignTokens.light.color.backgroundPrimaryDefault)
          .fade(0.6)
          .string(),
        borderRadius: 22,
        transition: 'background-color 0.2s',
        '&:hover': {
          backgroundColor: color(DesignTokens.light.color.backgroundPrimaryDefault)
            .fade(0.8)
            .string(),
          '&:active': {
            backgroundColor: color(DesignTokens.light.color.backgroundPrimaryDefault)
              .fade(0.9)
              .string()
          }
        }
      },
    });

    return (
      <Tooltip text={text('text', 'Station Hub')} styles={{ duration: '0 !important', exitDuration: '0 !important', delay: '0 !important' }}>
        <Icon icon={Icons.STATION} className={useStyle().icon} size={19}/>
      </Tooltip>
    );
  })
  .add('with custom style', () => (
    <Tooltip
      text={text('text', 'Custom Hub', 'tooltip')}
      styles={{
        space: number('space', 42, { range: true, min: 0, max: 200, step: 1 }, 'tooltip'),
        duration: number('duration (ms)', 350, { range: true, min: 0, max: 2000, step: 10 }, 'tooltip'),
        exitDuration: number('exitDuration (ms)', 600, { range: true, min: 0, max: 2000, step: 10 }, 'tooltip'),
        delay: number('delay (ms)', 0, { range: true, min: 0, max: 1500, step: 10 }, 'tooltip'),
        position: select('position', Object.values(TooltipPositions) as TooltipPositions[], TooltipPositions.LEFT, 'tooltip'),
        margin: text('margin', '20px', 'tooltip'),
        container: {
          color: text('color', 'blue', 'box'),
          radius: number('radius', 20, { range: true, min: 0, max: 30, step: 1 }, 'box'),
          padding: text('padding', '20px', 'box')
        },
        text: {
          color: text('color', 'red', 'text'),
          size: number('size', 22, { range: true, min: 0, max: 30, step: 1 }, 'text'),
        }
      }}
    >
      <Icon icon={Icons.COG} size={100}/>
    </Tooltip>));
