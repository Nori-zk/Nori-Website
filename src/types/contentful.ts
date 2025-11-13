// Base types for Contentful entries
export interface ContentfulSys {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  firstPublishedAt?: string;
}

export interface ContentfulAsset {
  sys: ContentfulSys;
  title: string;
  description?: string;
  url: string;
  width?: number;
  height?: number;
  contentType: string;
  fileName: string;
  size: number;
}

// Rich text type
export interface RichText {
  json: any;
  links?: {
    assets?: {
      block?: ContentfulAsset[];
    };
    entries?: {
      inline?: any[];
      block?: any[];
    };
  };
}

// ContentBlock content type
export interface ContentBlock {
  sys: ContentfulSys;
  heading: string;
  body: RichText;
  greenText: string;
}

// Section content type
export interface Section {
  sys: ContentfulSys;
  title: string;
  tag: string;
  slug: string;
  greentext: string;
  contentBlocks?: ContentBlock[];
}

export interface ContentfulResponse<T> {
  data: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
  }>;
}

// Query options
export interface QueryOptions {
  preview?: boolean;
  locale?: string;
  limit?: number;
  skip?: number;
  order?: string;
}

export enum SectionTags {
  SectionOne = "section-one",
  SectionTwo = "section-two",
  SectionThree = "section-three",
  SectionFour = "section-four",
  SectionFive = "section-five",
}

export type SectionProps = {
  section: Section | undefined;
};
