import type { Options } from 'tsup';

export const tsup: Options = {
  splitting: true,
  clean: false, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify: true,
  bundle: false,
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  watch: true,
  target: 'es2022',
  outDir: 'dist',
  entry: ['src/**/*.ts'], //include all files under src
};
