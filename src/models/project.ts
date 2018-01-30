export default interface IProject {
  id: string;
  name: string;
  type: string;
  stack: string;
  launchDate: string;
  description: string[];
  links: IProjectLink[];
  heroImage: IImage;
  thumbnail: IImage;
  content: IModularBlock[] | null;
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

export enum ModularContentType {
  NormalImage = 'image_normal',
  FullWidthImage = 'image_full-width',
  TextWithTitle = 'text_with_title',
  TextOnly = 'text_only',
}

export interface IImageBlock {
  type: ModularContentType.FullWidthImage | ModularContentType.NormalImage;
  image: IImage;
}

export interface ITextBlock {
  type: ModularContentType.TextOnly | ModularContentType.TextWithTitle;
  title?: string;
  text: string[];
}

export type IModularBlock = IImageBlock | ITextBlock;