# Lab Babel

`lab-babel` is a small transform to allow testing your es6/jsx modules with [lab](https://github.com/hapijs/lab),
complete with code coverage and proper source maps.

[![NPM Version](https://img.shields.io/npm/v/lab-babel.svg)](https://npmjs.org/package/lab-babel)

## Usage

`lab -T node_modules/lab-babel -t 100 -S`

Any module (that is *not* in `node_modules`) required via your tests with an extension of `.js`, `.jsx`, `.es`, or `.es6` will be transpiled with babel and have sourcemaps inlined so that lab can show appropriate line numbers.

For more information on writing tests in lab, see the [README](https://github.com/hapijs/lab).

### Babel

For Babel 6.x, please install [`babel-preset-env`](https://www.npmjs.com/package/babel-preset-env) and modify your [`.babelrc`](https://babeljs.io/docs/usage/babelrc/) or [`package.json`](https://babeljs.io/docs/usage/babelrc/#use-via-package-json) accordingly.

For Babel >= 7, you'll need to install [scoped packages](https://babeljs.io/docs/en/next/v7-migration#scoped-packages) and configure Babel to use them instead.


### Global variable leak

Note that `__core-js_shared__` might be detected as a leak, but you can ignore it by
declaring it as global with `--globals __core-js_shared__` (or `-I __core-js_shared__`)
