import * as React from 'react';
import * as classNames from 'classnames';

import { IProjectLink } from '@models/project';
import Link from '@components/Link';

import './ProjectLinks.scss';

interface ProjectLinksProps {
  className?: string;
  links: IProjectLink[];
}

const ProjectLinks: React.SFC<ProjectLinksProps> = ({ className, links }) => {
  const projectLinksClasses = classNames('ProjectLinks', className);

  const linkList = links.map((link, index) => (
    <Link key={index} className="ProjectLinks__Link" to={link.url}>{link.label}</Link>
  ));

  return (
    <div className={projectLinksClasses}>
      {linkList}
    </div>
  );
};

export default ProjectLinks;