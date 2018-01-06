import * as React from 'react';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames';

import Project from '@models/project';
import Detail from './components/Detail';

import './ProjectCard.scss';

interface LinkProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.SFC<LinkProps> = ({ project, className }) => {
  const projectCardClasses = classNames('ProjectCard', className);

  return (
    <Link to={`/projects/${project.id}`} className={projectCardClasses}>
      <img className="ProjectCard__Thumbnail" src={project.thumbnail.medium} alt=""/>
      <div className="ProjectCard__Info">
        <h3 className="ProjectCard__Name">{project.name}</h3>
        <Detail className="ProjectCard__Type" label="Type" detail={project.type} />
        <Detail className="ProjectCard__Stack" label="Stack" detail={project.stack} />
      </div>
    </Link>
  );
};

export default ProjectCard;