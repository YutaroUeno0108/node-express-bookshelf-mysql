'use strict'

var Controller = module.exports = {};

var Promise = require('bluebird');
var _ = require('lodash');
var fs = require("fs")
var helper = require('../modules/helper');
var logger = helper.requireModule('logger');
var db = helper.requireModule('database');
var Sample = helper.requireModel('Sample');

Controller.findList = function(req,res) {
  return Sample.forge().findAll();
};

Controller.add = function(req,res){
  var values = {};
  values.sample_name = 'test';
  return db.transaction(function(t){
    return Sample.forge().create(values,t);
  });
};
