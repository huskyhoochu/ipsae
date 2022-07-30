import { Ipsae, IIpsae } from '@ipsae/core';
import { IRenderer } from '@ipsae/client/src/interfaces/renderer.interface';

class Renderer implements IRenderer {
  constructor(
    private readonly _ipsae: IIpsae,
    private readonly _rootElement: Element,
  ) {}

  private _addEditableAttribute() {
    this._rootElement?.setAttribute('contentEditable', 'true');
  }

  public render() {
    this._addEditableAttribute();

    console.log('ipsae is growing!');
  }
}

export const createRoot = (element: Element): IRenderer => {
  const ipsae = new Ipsae();
  return new Renderer(ipsae, element);
};
