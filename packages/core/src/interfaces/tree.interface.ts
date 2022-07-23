export type IpsaeNodeType =
  | 'root'
  | 'heading'
  | 'paragraph'
  | 'br'
  | 'emphasis'
  | 'blockquote'
  | 'list'
  | 'code'
  | 'hr'
  | 'link'
  | 'image';

type HeadingType = 1 | 2 | 3 | 4 | 5 | 6;

type EmphasisType = 'bold' | 'italic' | 'strikethrough';

type ListType = 'ordered' | 'unordered';

export type IpsaeNodeSubType = HeadingType | EmphasisType | ListType;

export interface IIpsaeNode {
  type: IpsaeNodeType;
  subType?: IpsaeNodeSubType;
  content: string;
  children: {
    [key: number]: IIpsaeNode;
  };
}
