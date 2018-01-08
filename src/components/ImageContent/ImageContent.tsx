import * as React from 'react';
import * as classNames from 'classnames';

import Image from '@components/Image';
import { IImage } from '@models/project';

import './ImageContent.scss';

interface ImageContentProps {
  className?: string;
  src: IImage;
  type?: string;
}

const ImageContent: React.SFC<ImageContentProps> = ({ className, src, type }) => {
  const imageContentClasses = classNames('ImageContent', className, {
    'ImageContent--FullWidth': type === 'full-width'
  });

  return(
    <Image className={imageContentClasses} src={src} />
  );
};

export default ImageContent;
