lab-babel is a small transform to allow testing your es6/jsx modules with lab, complete with code coverage and proper source maps.

## Usage

`lab -T node_modules/lab-babel -t 100 -S`

Any module (that is *not* in `node_modules`) required via your tests with an extension of `.js`, `.jsx`, `.es`, or `.es6` will be transpiled with babel and have sourcemaps inlined so that lab can show appropriate line numbers.

For more information on writing tests in lab, see the [README](https://github.com/hapijs/lab).

### Babel >= 6
For Babel versions greather than 6, please install [`babel-preset-es2015`](https://www.npmjs.com/package/babel-preset-es2015) add the following to your [`.babelrc`](https://babeljs.io/docs/usage/babelrc/):
```
{
  "presets": ["es2015"]
}
```
(this could be added to the `babel` section of yor `package.json`, as described by the [`.babelrc`](https://babeljs.io/docs/usage/babelrc/#use-via-package-json) documentation)
