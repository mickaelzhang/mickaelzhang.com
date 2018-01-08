import * as React from 'react';
import * as classNames from 'classnames';

import './ProjectTitle.scss';

interface ProjectTitleProps {
  title: string;
  className?: string;
}

const ProjectTitle: React.SFC<ProjectTitleProps> = ({ title, className }) => {
  const projectTitleClasses = classNames('ProjectTitle', className);

  return (
    <div className={projectTitleClasses}>
      <span className="ProjectTitle__Type">Project</span>
      <h1 className="ProjectTitle__Name">{title}</h1>
    </div>
  );
};

export default ProjectTitle;