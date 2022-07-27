export interface IRenderer {
  render(): void;
}

export type KeyboardEventListener = (e: KeyboardEvent) => void;
