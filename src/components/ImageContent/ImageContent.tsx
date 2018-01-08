import * as React from 'react';
import * as classNames from 'classnames';

import './ImageContent.scss';

interface ImageContentProps {
  className?: string;
  src: string;
  type?: string;
}

const ImageContent: React.SFC<ImageContentProps> = ({ className, src, type }) => {
  const imageContentClasses = classNames('ImageContent', className, {
    'ImageContent--FullWidth': type === 'full-width'
  });

  return(
    <img className={imageContentClasses} src={src} />
  );
};

export default ImageContent;
