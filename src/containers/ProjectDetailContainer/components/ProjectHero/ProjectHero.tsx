import * as React from 'react';
import * as classNames from 'classnames';

import { IImage } from '@models/project';

import './ProjectHero.scss';

interface ProjectHeroProps {
  className?: string;
  src: IImage;
  title: string;
}

const ProjectHero: React.SFC<ProjectHeroProps> = ({ className, src, title }) => {
  const projectHeroClasses = classNames('ProjectHero', className);

  return (
    <div className={projectHeroClasses} style={{ 'backgroundImage': `url(${src.original})` }}>
      <div className="ProjectHero__Container">
        <span className="ProjectHero__Type">Project</span>
        <h1 className="ProjectHero__Name">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectHero;