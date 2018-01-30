import * as React from 'react';
import * as classNames from 'classnames';
import * as DOMPurify from 'dompurify';

import './Text.scss';

interface TextProps {
  className?: string;
  value: string[];
}

const Text: React.SFC<TextProps> = ({ className, value }) => {
  const textClasses = classNames('Text', className);

  const paragraphes = value.map((paragraph, index) => (
    <p key={index} className="Text__Paragraph" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paragraph) }} />
  ));

  return (
    <div className={textClasses}>
      {paragraphes}
    </div>
  );
};

export default Text;