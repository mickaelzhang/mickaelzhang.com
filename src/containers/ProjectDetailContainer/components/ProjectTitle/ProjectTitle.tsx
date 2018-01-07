import * as React from 'react';
import * as classNames from 'classnames';

import './ProjectTitle.scss';

interface ProjectTitleProps {
  title: string;
  type: string;
  className?: string;
}

const ProjectTitle: React.SFC<ProjectTitleProps> = ({ title, type, className }) => {
  const projectTitleClasses = classNames('ProjectTitle', className);

  return (
    <div className={projectTitleClasses}>
      <span className="ProjectTitle__Type">{type}</span>
      <h1 className="ProjectTitle__Name">{title}</h1>
    </div>
  );
};

export default ProjectTitle;