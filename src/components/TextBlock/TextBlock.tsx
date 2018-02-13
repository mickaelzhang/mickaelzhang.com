import * as React from 'react';
import * as classNames from 'classnames';

import Text from '@components/Text';

import './TextBlock.scss';

interface TextBlockProps {
  className?: string;
  title?: string;
  text: string[];
}

const TextBlock: React.SFC<TextBlockProps> = ({ className, title, text }) => {
  const TextBlockClasses = classNames('TextBlock', className);

  return(
    <div className={TextBlockClasses}>
      {title ? <div className="TextBlock__Title">{title}</div> : null}
      <Text className="TextBlock__Text" value={text} />
    </div>
  );
};

export default TextBlock;
