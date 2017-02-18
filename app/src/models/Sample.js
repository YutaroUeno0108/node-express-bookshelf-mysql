'use strict'

var model = module.exports = {};

var helper = require('../modules/helper');
var db = helper.requireModule('database');

var Sample = db.Model.extend({
  tableName: 'sample_t',
  findAll:function(){
    return this.fetchAll();
  },
  forge:function(attributes,options){
    return this.forge(attributes,options);
  }
});

model.Model = db.model('Sample',Sample);

model.forge = function(attributes,options){
  return model.Model.forge(attributes,options);
};

model.findSomething = function () {
   return db.knex.select().from('Sample').timeout(1000, {cancel: true});
};
