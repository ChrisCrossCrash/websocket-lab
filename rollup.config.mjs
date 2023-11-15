import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // The commonjs plugin converts CommonJS modules to ES modules
    // so they are compatible with Rollup.
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs(),
    // The typescript plugin converts TypeScript to JavaScript.
    // https://github.com/rollup/plugins/tree/master/packages/typescript/#readme
    typescript(),
    // The node-resolve plugin tells Rollup how to find external modules.
    // https://github.com/rollup/plugins/tree/master/packages/node-resolve
    resolve(),
    // The terser plugin minifies the output.
    terser(),
  ],
}
