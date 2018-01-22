import * as React from 'react';
import * as classNames from 'classnames';

import { IProjectLink } from '@models/project';

import ProjectLinks from '../ProjectLinks';
import DetailLabel from '@components/DetailLabel';

import './ProjectOverview.scss';

interface ProjectOverviewProps {
  className?: string;
  text: string;
  links: IProjectLink[];
  type: string;
  stack: string;
  launchDate: string;
}

const ProjectOverview: React.SFC<ProjectOverviewProps> = ({ className, text, type, stack, links, launchDate }) => {
  const projectOverviewClasses = classNames('ProjectOverview', className);

  return (
    <div className={projectOverviewClasses}>
      <div className="ProjectOverview__Description">
        <div className="ProjectOverview__Text">{text}</div>
        <ProjectLinks links={links} />
      </div>
      <div className="ProjectOverview__Details">
        <DetailLabel
          className="ProjectOverview__DetailItem"
          type="Type"
          text={type}
        />
        <DetailLabel
          className="ProjectOverview__DetailItem"
          type="Stack"
          text={stack}
        />
        <DetailLabel
          className="ProjectOverview__DetailItem"
          type="date"
          text={launchDate}
        />
      </div>
    </div>
  );
};

export default ProjectOverview;