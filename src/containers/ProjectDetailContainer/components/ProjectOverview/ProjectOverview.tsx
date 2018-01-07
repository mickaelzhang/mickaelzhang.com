import * as React from 'react';
import * as classNames from 'classnames';

import './ProjectOverview.scss';

interface ProjectOverviewProps {
  className?: string;
  text: string;
}

const ProjectOverview: React.SFC<ProjectOverviewProps> = ({ className, text }) => {
  const projectOverviewClasses = classNames('ProjectOverview', className);

  return (
    <div className={projectOverviewClasses}>
      <div className="ProjectOverview__Description">{text}</div>
    </div>
  );
};

export default ProjectOverview;