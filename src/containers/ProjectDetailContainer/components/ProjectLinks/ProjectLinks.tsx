import * as React from 'react';
import * as classNames from 'classnames';

import { IProjectLink } from '@models/project';
import AppLink from '@components/AppLink';

import './ProjectLinks.scss';

interface ProjectLinksProps {
  className?: string;
  links: IProjectLink[];
}

const ProjectLinks: React.SFC<ProjectLinksProps> = ({ className, links }) => {
  const projectLinksClasses = classNames('ProjectLinks', className);

  const linkList = links.map((link, index) => (
    <AppLink key={index} className="ProjectLinks__Link" to={link.url}>{link.label}</AppLink>
  ));

  return (
    <div className={projectLinksClasses}>
      {linkList}
    </div>
  );
};

export default ProjectLinks;