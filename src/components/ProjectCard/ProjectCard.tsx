import * as React from 'react';
// import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import IProject from '@models/project';
import Image from '@components/Image';
import Link from '@components/Link';
import Detail from './components/Detail';

import './ProjectCard.scss';

interface LinkProps {
  project: IProject;
  className?: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProjectCard: React.SFC<LinkProps> = ({ project, className, isActive, onMouseEnter, onMouseLeave }) => {
  const projectCardClasses = classNames('ProjectCard', className, {
    'ProjectCard--Inactive': !isActive
  });

  return (
    <Link
      to={`/projects/${project.id}`}
      className={projectCardClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image className="ProjectCard__Thumbnail" src={project.thumbnail} />
      <div className="ProjectCard__Info">
        <h3 className="ProjectCard__Name">{project.name}</h3>
        <Detail className="ProjectCard__Type" label="Type" detail={project.type} />
        <Detail className="ProjectCard__Stack" label="Stack" detail={project.stack} />
      </div>
    </Link>
  );
};

ProjectCard.defaultProps = {
  isActive: true,
  onMouseEnter: () => {},
  onMouseLeave: () => {},
};

export default ProjectCard;