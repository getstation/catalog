import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import images from '../../assets/images';

type ImageProps = {
  className?: string;
  image: string;
	size?: number | string;
	width?: number | string;
	height?: number | string;
};

const useStyles = createUseStyles({
  Image: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
    ],
    width: (props: ImageProps) => props.width || props.size || 'auto',
    height: (props: ImageProps) => props.height || props.size || 'auto'
  },
  image: {
    width: '100%',
    height: '100%'
  },
});

const Image = (props: ImageProps) => {
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.Image, props.className)}>
      <img className={classes.image} src={images[props.image] || props.image} alt={'image'} />
    </div>
  );
};

export default React.memo(Image);