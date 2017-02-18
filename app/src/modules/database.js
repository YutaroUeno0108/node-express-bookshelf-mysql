'use strict'

var Promise = require('bluebird')
var fs = require('fs');
var path = require('path');
var helper = require(path.join(__src_root,'modules/helper'));
var config = helper.requireModule('config')();

var dbconfig = config.dbconfig
var knex = require('knex')({
  client:'mysql',
  connection:{
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    charset: 'utf8'
  },
  pool:{
    min:0,
    requestTimeout:1000
  },
  debug:config.env === 'dev'
});

var connectionErrorHandler = function (connection, err) {
  if (connection && err && err.fatal) {
    if (connection.removedFromThePool)
      return;
    connection.removedFromThePool = true;
    knex.client.releaseConnection(connection);
  }
};

var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
