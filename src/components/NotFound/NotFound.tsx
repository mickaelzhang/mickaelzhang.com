import * as React from 'react';
import * as classNames from 'classnames';

import './NotFound.scss';

interface NotFoundProps {
  className?: string;
}

const NotFound: React.SFC<NotFoundProps> = ({ className }) => {
  const notFoundClasses = classNames('NotFound', className);

  return (
    <div className={notFoundClasses}>
      <span className="NotFound__404">404</span>
      <span className="NotFound__Text">Page Not Found</span>
    </div>
  );
};

export default NotFound;