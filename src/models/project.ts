export default interface Project {
  id: string;
  name: string;
  type: string;
  stack: string;
  description: string;
  links: ProjectLink[];
  heroImage: Image;
  thumbnail: Image;
  content: ImageBlock[];
}

export interface Image {
  small: string;
  medium: string;
  large?: string;
  original: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ImageBlock {
  type: string;
  image: Image;
}