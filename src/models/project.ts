export default interface IProject {
  id: string;
  name: string;
  type: string;
  stack: string;
  description: string;
  links: IProjectLink[];
  heroImage: IImage;
  thumbnail: IImage;
  content: IImageBlock[];
}

export interface IImage {
  original: string;
  srcSet: IImageSrcSet[];
}

export interface IImageSrcSet {
  src: string;
  breakpoint: number;
}

export interface IProjectLink {
  label: string;
  url: string;
}

export interface IImageBlock {
  type: string;
  image: IImage;
}