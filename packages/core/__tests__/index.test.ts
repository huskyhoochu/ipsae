import { Ipsae } from '../src';

let ipsae: Ipsae;

describe('Ipsae', () => {
  beforeEach(() => {
    ipsae = new Ipsae();
  });

  it('init', () => {
    const tree = ipsae.tree;

    expect(tree.type).toEqual('root');
    expect(Object.keys(tree.children).length).toEqual(1);
  });

  it('create node to root', () => {
    ipsae.createNode([1], 'hi', 'heading', 1);
    const tree = ipsae.tree;

    expect(Object.keys(tree.children).length).toEqual(2);
  });

  it('update node to init paragraph', () => {
    ipsae.updateNode([0], 'first hello');
    const tree = ipsae.tree;

    expect(tree.children[0].content).toEqual('first hello');
  });
});
