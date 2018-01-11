import * as React from 'react';
import * as classNames from 'classnames';

import Image from '@components/Image';
import { IImage } from '@models/project';

import './ImageBlock.scss';

interface ImageBlockProps {
  className?: string;
  src: IImage;
  type?: string;
}

const ImageBlock: React.SFC<ImageBlockProps> = ({ className, src, type }) => {
  const imageBlockClasses = classNames('ImageBlock', className, {
    'ImageBlock--FullWidth': type === 'full-width'
  });

  return(
    <Image className={imageBlockClasses} src={src} />
  );
};

export default ImageBlock;
