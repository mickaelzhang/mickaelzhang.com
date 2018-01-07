import * as React from 'react';
import * as classNames from 'classnames';

import './ProjectImage.scss';

interface ProjectImageProps {
  className: string;
  src: string;
}

const ProjectImage: React.SFC<ProjectImageProps> = ({ className, src }) => {
  const projectImageClasses = classNames('ProjectImage', className);

  return (
    <img className={projectImageClasses} src={src} />
  );
};

export default ProjectImage;