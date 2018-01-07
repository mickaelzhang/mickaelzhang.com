import * as React from 'react';
import * as classNames from 'classnames';

import { ProjectLink } from '@models/project';

import './ProjectLinks.scss';

interface ProjectLinksProps {
  className?: string;
  links: ProjectLink[];
}

const ProjectLinks: React.SFC<ProjectLinksProps> = ({ className, links }) => {
  const projectLinksClasses = classNames('ProjectLinks', className);

  const linkList = links.map((link, index) => (
    <a key={index} className="ProjectLinks__Link" href={link.url} target='_blank' rel='noopener noreferrer'>{link.label}</a>
  ));

  return (
    <div className={projectLinksClasses}>
      {linkList}
    </div>
  );
};

export default ProjectLinks;