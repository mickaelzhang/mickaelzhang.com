import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import Project from '@models/project';

import './NextProjectLink.scss';

interface NextProjectLinkProps {
  className?: string;
  project: Project;
  onClick: () => void;
}

const NextProjectLink: React.SFC<NextProjectLinkProps> = ({ className, project, onClick }) => {
  const nextProjectLinkClasses = classNames('NextProjectLink', className);

  return (
    <Link
      className={nextProjectLinkClasses}
      to={`/projects/${project.slug}`}
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