'use strict'

var Controller = module.exports = {};

var Promise = require('bluebird');
var _ = require('lodash');
var fs = require("fs")
var helper = require('../modules/helper');
var logger = helper.requireModule('logger');
var Sample = helper.requireModel('Sample');

Controller.findList = function(req,res) {
  return Sample.forge().findAll();
};
