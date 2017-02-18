'use strict'

var path = require('path');

var modulehelper = require(path.join(__src_root,'modules/helper'));

var logger = modulehelper.requireModule('logger');

var _ = require('lodash');

var helper = {};

var _res = null;

helper.json = function(err,result) {
  /*set error*/
  var errInfo = null;
  if (err != null) {
    errInfo = {};
    if (err.status != null){
      errInfo.status = err.status;
    } else {
      errInfo.status =  'UNKNOWN';
    }
    if (err.errCode != null){
      errInfo.errCode = err.errCode;
    } else {
      errInfo.errCode =  '';
    }
  }
  /*set response*/
  var res = {};
  res.res = {};
  res.res.errInfo = errInfo;
  if (result != null){
    res.res.result = result;
  }else{
    res.res.result = null;
  }
  return _res.json(res);
};

helper.handler = function(req,res,next){
  _res = res;
  _res.status = 200;
  if (!_.isUndefined(res.result)){
    return helper.json(null,res.result);
  }else{
    return next();
  }
};

helper.errorHandler = function(err,req,res,next){
  logger.error(err);
  _res = res;
  _res.status = 400;
  return helper.json(err,null);
};

module.exports = helper;
