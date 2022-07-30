import * as path from 'path';
import configure from '../../rollup.config';

export default configure({
  input: './src/index.ts',
  name: 'core',
  tsconfig: path.resolve(path.resolve(), 'tsconfig.json'),
});
