export default interface IProject {
  id: string;
  name: string;
  type: string;
  stack: string;
  launchDate: string;
  description: string;
  links: IProjectLink[];
  heroImage: IImage;
  thumbnail: IImage;
  content: IImageBlock[] | null;
}

export interface IImage {
  original: string;
  blured: string;
  sizes: IImageSizes;
  srcSet: IImageSrcSet[];
}

export interface IImageSizes {
  width: number;
  height: number;
  ratio: number;
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