import * as React from 'react';
import * as classNames from 'classnames';

import { IImageBlock } from '@models/project';
import ImageContent from '@components/ImageContent';

import './ModularContent.scss';

interface ModularContentProps {
  className?: string;
  content: IImageBlock[];
}

const ModularContent: React.SFC<ModularContentProps> = ({ className, content }) => {
  const modularContentClasses = classNames('ModularContent', className);

  const modularContent = content.map((block: IImageBlock, index: number) => {
    switch (block.type) {
      case 'image_normal':
        return (
          <ImageContent
            key={index}
            className="ModularContent__Block ModularContent__ImageRegular"
            src={block.image}
          />
        );
      case 'image_full-width':
        return (
          <ImageContent
            key={index}
            className="ModularContent__Block ModularContent__ImageFullWidth"
            src={block.image}
            type="full-width"
          />
        );
      default:
        return null;
    }
  });

  return (
    <div className={modularContentClasses}>
      {modularContent}
    </div>
  );
};

export default ModularContent;