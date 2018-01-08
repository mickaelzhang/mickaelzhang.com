export default interface IProject {
  id: string;
  name: string;
  type: string;
  stack: string;
  description: string;
  links: ProjectLink[];
  heroImage: IImage;
  thumbnail: IImage;
  content: ImageBlock[];
}

export interface IImage {
  original: string;
  srcSet: IImageSrcObject[];
}

export interface IImageSrcObject {
  src: string;
  breakpoint: number;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ImageBlock {
  type: string;
  image: IImage;
}