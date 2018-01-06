export default interface Project {
  id: number;
  slug: string;
  name: string;
  type: string;
  stack: string;
  description: string;
  heroImage: Image;
  thumbnail: Image;
  content: ImageBlock[];
}

interface Image {
  small: string;
  medium: string;
  large?: string;
  original: string;
}

interface ImageBlock {
  type: string;
  image: Image;
}