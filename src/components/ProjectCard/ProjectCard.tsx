import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import IProject from '@models/project';
import Image from '@components/Image';
import Detail from './components/Detail';

import './ProjectCard.scss';

interface LinkProps {
  project: IProject;
  className?: string;
}

const ProjectCard: React.SFC<LinkProps> = ({ project, className }) => {
  const projectCardClasses = classNames('ProjectCard', className);

  return (
    <Link to={`/projects/${project.id}`} className={projectCardClasses}>
      <Image className="ProjectCard__Thumbnail" src={project.thumbnail} />
      <div className="ProjectCard__Info">
        <h3 className="ProjectCard__Name">{project.name}</h3>
        <Detail className="ProjectCard__Type" label="Type" detail={project.type} />
        <Detail className="ProjectCard__Stack" label="Stack" detail={project.stack} />
      </div>
    </Link>
  );
};

export default ProjectCard;