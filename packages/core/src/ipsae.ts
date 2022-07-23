import { IIpsae } from '@ipsae/core/src/interfaces/ipsae.interface';
import {
  IpsaeNodeSubType,
  IpsaeNodeType,
  IIpsaeNode,
} from '@ipsae/core/src/interfaces/tree.interface';

export class Ipsae implements IIpsae {
  private readonly _tree: IIpsaeNode;

  constructor() {
    this._tree = {
      type: 'root',
      content: '',
      children: {
        0: {
          type: 'paragraph',
          content: '',
          children: {},
        },
      },
    };
  }

  public get tree(): IIpsaeNode {
    return this._tree;
  }

  public createNode(
    cursor: number[],
    content: string,
    nodeType: IpsaeNodeType,
    nodeSubType?: IpsaeNodeSubType,
  ) {
    const newNode: IIpsaeNode = {
      type: nodeType,
      subType: nodeSubType,
      content,
      children: {},
    };

    const copyCursor = cursor.slice();
    const updatePosition = copyCursor.pop();

    if (!updatePosition) {
      throw Error('invalid cursor position');
    }

    let updateNode = this._tree;

    copyCursor.forEach(idx => {
      updateNode = updateNode.children[idx];
    });

    updateNode.children = Object.assign(updateNode.children, {
      [updatePosition]: newNode,
    });
  }

  public updateNode(
    cursor: number[],
    newContent?: string,
    newNodeType?: IpsaeNodeType,
    newNodeSubType?: IpsaeNodeSubType,
  ) {
    let updateNode = this._tree;

    cursor.forEach(idx => {
      updateNode = updateNode.children[idx];
    });

    if (newContent) {
      updateNode.content = newContent;
    }

    if (newNodeType) {
      updateNode.type = newNodeType;
    }

    if (newNodeSubType) {
      updateNode.subType = newNodeSubType;
    }
  }
}
