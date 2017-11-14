var Freemarker = require('freemarker.js');
var path = require('path');
var viewRoot = path.join(__dirname, '../templates');
var fm = new Freemarker({
    viewRoot: viewRoot,
    options: {
        // 'sourceRoot':  __dirname + '/templates',
        sourceEncoding:"utf-8",
        outputEncoding:"utf-8"
    }
});
exports.viewRoot = viewRoot;
exports.engine = function(filePath, options, callback) {
    var sourceAbsolutePath = path.normalize(filePath);
    fm.render(sourceAbsolutePath.substring(path.normalize(viewRoot).length)
    ,options,function(err, html, output){
        if (err) {
            return callback(new Error(err));
        }
        return callback(null, html)
    });
}