var Babel;

try {
    Babel = require('@babel/core');
} catch (ex) {
    try {
        Babel = require('babel-core');
    } catch (ex) {
        throw new Error('Neither @babel/core nor babel-core package is installed!');
    }
}

var internals = {};
internals.transform = function (content, filename) {

    if (/^node_modules/.test(filename)) {
        return content;
    }

    var transformed = Babel.transform(content, {
        filename: filename,
        sourceMap: 'inline',
        sourceFileName: filename,
        auxiliaryCommentBefore: '$lab:coverage:off$',
        auxiliaryCommentAfter: '$lab:coverage:on$'
    });

    return transformed.code;
};

internals.extensions = ['js', 'jsx', 'es', 'es6'];
internals.methods = [];
for (var i = 0, il = internals.extensions.length; i < il; ++i) {
    internals.methods.push({ ext: internals.extensions[i], transform: internals.transform });
}

module.exports = internals.methods;
