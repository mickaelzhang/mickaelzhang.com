import * as React from 'react';
import * as classNames from 'classnames';

import { IModularBlock, ModularContentType } from '@models/project';
import ImageBlock from '@components/ImageBlock';
import TextBlock from '@components/TextBlock';

import './ModularContent.scss';

interface ModularContentProps {
  className?: string;
  content: IModularBlock[];
}

const ModularContent: React.SFC<ModularContentProps> = ({ className, content }) => {
  const modularContentClasses = classNames('ModularContent', className);

  const modularContent = content.map((block: IModularBlock, index: number) => {
    switch (block.type) {
      case ModularContentType.NormalImage:
        return (
          <ImageBlock
            key={index}
            className="ModularContent__Block ModularContent__ImageRegular"
            src={block.image}
          />
        );
      case ModularContentType.FullWidthImage:
        return (
          <ImageBlock
            key={index}
            className="ModularContent__Block ModularContent__ImageFullWidth"
            src={block.image}
            type="full-width"
          />
        );
      case ModularContentType.TextWithTitle:
        return (
          <TextBlock
            key={index}
            className="ModularContent__Block ModularContent__TextWithTitle"
            title={block.title}
            text={block.text}
          />
        );
      case ModularContentType.TextOnly:
        return (
          <TextBlock
            key={index}
            className="ModularContent__Block ModularContent__TextOnly"
            text={block.text}
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