import * as React from 'react';
import * as classNames from 'classnames';

import './Detail.scss';

interface DetailProps {
  label: string;
  detail: string;
  className?: string;
}

const Detail: React.SFC<DetailProps> = ({ label, detail, className }) => {
  const DetailClasses = classNames('Detail', className);

  return (
    <div className={DetailClasses}>
      <div className="Detail__Label">{label}</div>
      <div className="Detail__Detail">{detail}</div>
    </div>
  );
};

export default Detail;