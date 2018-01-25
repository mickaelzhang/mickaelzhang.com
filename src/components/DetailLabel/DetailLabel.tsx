import * as React from 'react';
import * as classNames from 'classnames';

import './DetailLabel.scss';

interface DetailLabelProps {
  className?: string;
  type: string;
  text: string;
}

const DetailLabel: React.SFC<DetailLabelProps> = ({ type, text, className }) => {
  const detailLabelClasses = classNames('DetailLabel', className);

  return (
    <div className={detailLabelClasses}>
      <div className="DetailLabel__Type">{type}</div>
      <div className="DetailLabel__Text">{text}</div>
    </div>
  );
};

export default DetailLabel;