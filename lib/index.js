var Babel = require('babel');
var SourceMap = require('source-map');

var internals = {};
internals.transform = function (content, filename) {

    if (/^node_modules/.test(filename)) {
        return content;
    }

    content = '// $start$\n' + content;
    var transformed = Babel.transform(content, { sourceMap: true, sourceFileName: filename });

    var lines = transformed.code.split('\n');
    lines.splice(lines.indexOf('"use strict";') + 1, 0, '// $lab:coverage:off$');
    lines.splice(lines.indexOf('// $start$'), 1, '// $lab:coverage:on$');

    var smc = new SourceMap.SourceMapConsumer(transformed.map);
    var sm = new SourceMap.SourceMapGenerator();
    smc.eachMapping(function (map) {

        sm.addMapping({
            generated: {
                line: map.generatedLine,
                column: map.generatedColumn
            },
            original: {
                line: --map.originalLine,
                column: map.originalColumn
            },
            source: map.source,
            name: map.name
        });
    });

    lines.push('//# sourceMappingURL=data:application/json;base64,' + new Buffer(sm.toString()).toString('base64'));
    return lines.join('\n');
};

internals.extensions = ['js', 'jsx', 'es', 'es6'];
internals.methods = [];
for (var i = 0, il = internals.extensions.length; i < il; ++i) {
    internals.methods.push({ ext: internals.extensions[i], transform: internals.transform });
}

module.exports = internals.methods;
