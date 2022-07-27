import { IIpsae } from '@ipsae/core/src/interfaces/ipsae.interface';
import { IRenderer } from '@ipsae/client/src/interfaces/renderer.interface';
import { Ipsae } from '@ipsae/core/src';

class Renderer implements IRenderer {
  constructor(
    private readonly _ipsae: IIpsae,
    private readonly _rootElement: HTMLElement,
  ) {}

  private _addEditableAttribute() {
    this._rootElement.setAttribute('contentEditable', 'true');
  }

  public render() {
    this._addEditableAttribute();

    console.log('ipsae is growing!');
  }
}

export const createRoot = (element: HTMLElement): IRenderer => {
  const ipsae = new Ipsae();
  return new Renderer(ipsae, element);
};
