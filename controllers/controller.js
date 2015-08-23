var dust = require('dustjs-linkedin');
var React = require('react');

dust.onLoad = function(tmpl, cb) {
  fs.readFile(path.join('./views', path.relative('/', path.resolve('/', tmpl + '.dust'))), { encoding: 'utf8' }, cb);
};

exports.getIndex = function(req, res) {
  var html = React.renderToString(React.createElement(PostSection, {}));
  dust.render('layout', { reactOutput: html}, function(err, out) {
    if (err) console.log(err);
    res.send(out);
  });
};
