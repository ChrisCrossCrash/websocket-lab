import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/main.ts',
  output: [
    {
      file: 'dist/websocket-lab.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    // The typescript plugin converts TypeScript to JavaScript.
    // https://github.com/rollup/plugins/tree/master/packages/typescript/#readme
    typescript(),
  ],
}
