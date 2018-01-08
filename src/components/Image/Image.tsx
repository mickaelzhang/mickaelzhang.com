import * as React from 'react';
import * as classNames from 'classnames';

import { IImage, IImageSrcObject } from '@models/project';
import './Image.scss';

interface ImageProps {
  className?: string;
  src: IImage;
}

const Image: React.SFC<ImageProps> = ({ className, src }) => {
  const imageClasses = classNames('Image', className);

  return (
    <img className={imageClasses} src={src.original} srcSet={getSrcSet(src)} alt="" />
  );
};

function getSrcSet(src: IImage): string {
  const srcSetValue = src.srcSet.reduce((previousValue: string, imageSrc: IImageSrcObject) => {
    const newSrcSet = `${imageSrc.src} ${imageSrc.breakpoint}w`;

    if (previousValue === '') {
      return newSrcSet;
    } else {
      return `${previousValue}, ${newSrcSet}`;
    }
  }, '');

  return srcSetValue;
}

export default Image;