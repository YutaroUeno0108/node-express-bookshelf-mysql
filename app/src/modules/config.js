'use strict'

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

var configs = {};

module.exports = function(configPath){
  if (!configPath) {
    configPath = path.join(process.cwd(),'config');
  }
  if (configs.configPath != null) {
    return configs.configPath;
  }

  var env = process.env.NODE_ENV || 'dev';
  var file = path.join(configPath,env + ".json");
  var config = null;
  try {
    config = JSON.parse(fs.readFileSync(file));
  } catch(e) {

  }

  configs.configPath = config;
  return configs.configPath;
}
