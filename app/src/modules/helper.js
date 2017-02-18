
var path = require('path');

config_path = path.join(__src_root,'config');

modules_path = path.join(__src_root,'modules');

routes_path = path.join(__src_root,'routes');

models_path = path.join(__src_root,'models');

controllers_path = path.join(__src_root,'controllers');

helper = {};

helper.requireRoute = function(route){
  return require(path.join(routes_path,route));
};

helper.requireModule = function(module){
  return require(path.join(modules_path,module));
};

helper.requireController = function(controller){
  return require(path.join(controllers_path,controller));
};

helper.requireModel = function(model){
  return require(path.join(models_path,model));
};

module.exports = helper;
