import React, { useCallback } from 'react';
import { createRoot } from '@ipsae/client';

export const ReactIpsae = (props: JSX.IntrinsicElements['div']) => {
  const injectRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const root = createRoot(node);
      root.render();
    }
  }, []);

  return <div ref={injectRef} {...props} />;
};
