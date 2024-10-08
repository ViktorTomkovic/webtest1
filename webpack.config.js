import { resolve } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//const __filename = url.fileURLToPath(import.meta.url);

const options = {
	devtool: 'inline-source-map',
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.([cm]?ts|tsx)$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/i,
				use: ["css-loader"],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		extensionAlias: {
			'.ts': ['.js', '.ts'],
			'.cts': ['.cjs', '.cts'],
			'.mts': ['.mjs', '.mts']
		}
	},
	devServer: {
		port: 9090,
	}
};
export default options;
