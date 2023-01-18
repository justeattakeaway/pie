import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

// true for build, false for dev
const production = !process.env.ROLLUP_WATCH;

export default {
	input: './compiled/index.js',
	output: {
		name: 'PieButton',
		file: 'dist/bundle.js',
		format: 'iife', // immediately-invoked function expression - suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(),
		commonjs(),
		production && terser() // minify in production
	]
};