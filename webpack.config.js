import { resolve } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//const __filename = url.fileURLToPath(import.meta.url);

export const entry = './src/index.js';
export const output = {
	filename: 'main.js',
	path: resolve(__dirname, 'dist'),
};
export const mode = 'development';

export default { 'entry' : entry, 'output': output, 'mode': mode };
