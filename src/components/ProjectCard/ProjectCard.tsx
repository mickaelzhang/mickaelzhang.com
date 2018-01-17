import * as React from 'react';
// import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import IProject from '@models/project';
import Image from '@components/Image';
import Link from '@components/Link';
import DetailLabel from '@components/DetailLabel';

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
        <DetailLabel
          className="ProjectCard__Type"
          type="Type"
          text={project.type}
        />
        <DetailLabel
          className="ProjectCard__Stack"
          type="Stack"
          text={project.stack}
        />
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