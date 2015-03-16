lab-babel is a small transform to allow testing your es6/jsx modules with lab, complete with code coverage and proper source maps.

## Usage

`lab -T node_modules/lab-babel -t 100 -S`

Any module (that is *not* in `node_modules`) required via your tests with an extension of `.js`, `.jsx`, `.es`, or `.es6` will be transpiled with babel and have sourcemaps inlined so that lab can show appropriate line numbers.

For more information on writing tests in lab, see the [README](https://github.com/hapijs/lab).
