import * as React from 'react';
import * as classNames from 'classnames';

import IProject from '@models/project';
import Link from '@components/Link';

import './NextProjectLink.scss';

interface NextProjectLinkProps {
  className?: string;
  project: IProject;
  onClick: () => void;
}

const NextProjectLink: React.SFC<NextProjectLinkProps> = ({ className, project, onClick }) => {
  const nextProjectLinkClasses = classNames('NextProjectLink', className);

  return (
    <Link
      className={nextProjectLinkClasses}
      to={`/projects/${project.id}`}
      onClick={() => onClick()}
    >
      <div className="NextProjectLink__Text">
        <div className="NextProjectLink__Label">Next project</div>
        <div className="NextProjectLink__Name">{project.name}</div>
      </div>
    </Link>
  );
};

export default NextProjectLink;