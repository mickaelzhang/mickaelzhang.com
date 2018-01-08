import * as React from 'react';
import * as classNames from 'classnames';

import { IImage } from '@models/project';
import Image from '@components/Image';


import './HeroImage.scss';

interface HeroImageProps {
  className?: string;
  src: IImage;
}

const HeroImage: React.SFC<HeroImageProps> = ({ className, src }) => {
  const heroImageClasses = classNames('HeroImage', className);

  return (
    <Image className={heroImageClasses} src={src} />
  );
};

export default HeroImage;