import { swc, minify } from 'rollup-plugin-swc3';

export default opts => {
  const options = Object.assign({}, opts);

  /**
   * @type {import('rollup').RollupOptions}
   */
  const config = {
    input: options.input,
    output: [
      { format: 'cjs', file: './dist/index.cjs.js', sourcemap: false },
      {
        format: 'umd',
        file: './dist/index.min.js',
        sourcemap: false,
        plugins: [minify()],
        name: options.name,
      },
    ],
    plugins: [swc({ tsconfig: options.tsconfig })],
  };

  return config;
};
