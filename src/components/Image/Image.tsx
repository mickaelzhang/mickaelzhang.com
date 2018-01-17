import * as React from 'react';
import * as classNames from 'classnames';

import { IImage, IImageSrcSet } from '@models/project';
import './Image.scss';

interface ImageProps {
  className?: string;
  src: IImage;
}

const Image: React.SFC<ImageProps> = ({ className, src }) => {
  const imageClasses = classNames('Image', className);

  return (
    <div className={imageClasses}>
      <div className="Image__Container" style={{ 'paddingTop': `${src.sizes.ratio * 100}%` }}>
        <img className="Image__DetailedImage" src={src.original} srcSet={getSrcSet(src)} alt="" />
      </div>
    </div>
  );
};

function getSrcSet(src: IImage): string {
  const srcSetValue = src.srcSet.reduce((previousValue: string, imageSrc: IImageSrcSet) => {
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