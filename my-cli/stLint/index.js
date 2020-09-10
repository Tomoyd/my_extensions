const stylelint = require('stylelint');
const path = require('path');
console.log(path.join(__dirname, '../'));
function lint() {
  stylelint
    .lint({
      configFile: path.join(__dirname, '../config.json'),
      configBasedir: path.join(__dirname, '../'),
      files: '**/*.{css,less}',
      fix: true,
    })
    .then(function (data) {
      console.log(stylelint.formatters.string(data.results));
    })
    .catch(function (err) {
      console.log('err', err);
      stylelint.formatters.json(err);
    });
}

module.exports = lint;
