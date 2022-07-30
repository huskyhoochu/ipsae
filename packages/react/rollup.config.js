import path from 'path';
import configure from '../../rollup.config';

export default configure({
  input: './src/index.ts',
  name: 'react',
  tsconfig: path.resolve(path.resolve(), '..', '..', 'tsconfig.json'),
});
