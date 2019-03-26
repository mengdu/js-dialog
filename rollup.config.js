const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const Eslint = require('rollup-plugin-eslint')
const babel = require('rollup-plugin-babel')
const Uglify = require('rollup-plugin-uglify')
const pkg = require('./package.json')
const style = require('rollup-plugin-style')

const banner =
  '/* eslint-disable */\n' +
  '/*!\n' +
  ' * Build version v' + pkg.version + '\n' +
  ' * Create by ' + pkg.author.email + '\n' +
  ' * Created at ' + new Date() + '\n' +
  ' */'

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  input: isProduction ? 'src/index.js' : 'docs/index.js',
  output: [
    {
      name: 'Dialog',
      file: isProduction ? 'dist/index.js' : 'docs/dist/index.js',
      format: 'umd',
      sourcemap: false
    }
  ],
  plugins: [
    Eslint.eslint({
      exclude: ['node_modules/**', '**/*.css']
    }),
    resolve(),
    commonjs(),
    !isProduction && style({
      include: ['**/*.css'],
      output: 'style'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    (isProduction && Uglify.uglify()),
    {
      name: 'banner',
      renderChunk (code) {
        return banner + '\n' + code
      }
    }
  ]
}
