import {
  IpsaeNodeSubType,
  IpsaeNodeType,
} from '@ipsae/core/src/interfaces/tree.interface';

export interface IIpsae {
  createNode(
    cursor: number[],
    content: string,
    nodeType: IpsaeNodeType,
    nodeSubType?: IpsaeNodeSubType,
  ): void;

  updateNode(
    cursor: number[],
    content: string,
    nodeType: IpsaeNodeType,
    nodeSubType?: IpsaeNodeSubType,
  ): void;
}
