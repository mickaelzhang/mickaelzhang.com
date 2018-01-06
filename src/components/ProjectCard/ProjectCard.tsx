import * as React from 'react';
import { Link } from 'react-router-dom';

import './ProjectCard.scss';

interface LinkProps {
  project: string;
}

const ProjectCard: React.SFC<LinkProps> = ({ project }) => (
  <Link to={`/projects/${project}`}>
  </Link>
);

export default ProjectCard;