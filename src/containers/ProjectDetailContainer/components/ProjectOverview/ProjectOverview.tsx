import * as React from 'react';
import * as classNames from 'classnames';

import { ProjectLink } from '@models/project';

import ProjectLinks from '../ProjectLinks';

import './ProjectOverview.scss';

interface ProjectOverviewProps {
  className?: string;
  text: string;
  links: ProjectLink[];
}

const ProjectOverview: React.SFC<ProjectOverviewProps> = ({ className, text, links }) => {
  const projectOverviewClasses = classNames('ProjectOverview', className);

  return (
    <div className={projectOverviewClasses}>
      <div className="ProjectOverview__Description">{text}</div>
      <ProjectLinks links={links} />
    </div>
  );
};

export default ProjectOverview;