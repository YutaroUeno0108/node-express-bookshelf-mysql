
var helper = require('./helper');

module.exports = function(app) {

  app.use('/', helper.requireRoute('index'));
  app.use('/users', helper.requireRoute('users'));
  app.use('/sample', helper.requireRoute('sample'));

};
