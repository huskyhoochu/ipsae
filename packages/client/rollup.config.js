import path from 'path';
import configure from '../../rollup.config';

export default configure({
  input: './src/index.ts',
  name: 'client',
  tsconfig: path.resolve(path.resolve(), 'tsconfig.json'),
});
