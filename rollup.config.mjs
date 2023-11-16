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
  // The external option tells Rollup which modules to exclude from the bundle.
  // https://rollupjs.org/configuration-options/#external
  external: ['ws', 'http'],
}
