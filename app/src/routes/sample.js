'use strict'

var router = require('express').Router();
var path = require('path');
var helper = require(path.join(__src_root,'modules/helper'));

var logger = helper.requireModule('logger');

var database = helper.requireModule('database');

router.get('/',function(req,res,next){
  var sampleController = helper.requireController('SampleController');
  return sampleController.findList(req,res)
  .then(function(result){
    res.result  = result;
    var sess = req.session
      if (sess.views) {
        sess.views++;
        res.views = sess.views;
      } else {
        sess.views = 1;
        res.views = sess.views;
      }
    return next();
  })
  .catch(function(err){
    return next(err);
  });

});

router.post('/',function(req,res,next){
  var sampleController = helper.requireController('SampleController');
  return sampleController.add(req,res).then(function(result){
    res.result  = result;
    return next();
  })
  .catch(function(err){
    return next(err);
  });
});

router.param('id',function(req,res,next){
  var sampleController = helper.requireController('SampleController');
  return sampleController.find(req.params.id).then(function(result){
    req.sample  = result;
    return next();
  })
  .catch(function(err){
    return next(err);
  });
});

router.put('/:id',function(req,res,next){
  var sampleController = helper.requireController('SampleController');
  return sampleController.update(req.sample,req.body).then(function(result){
    res.result  = result;
    return next();
  })
  .catch(function(err){
    return next(err);
  });
});

module.exports = router;
