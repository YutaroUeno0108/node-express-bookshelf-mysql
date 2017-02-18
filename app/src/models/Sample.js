'use strict'

var model = module.exports = {};

var helper = require('../modules/helper');
var db = helper.requireModule('database');

model.COLS = ['sample_id','sample_name'];

var Sample = db.Model.extend({
  tableName: 'sample_t',
  idAttribute: 'sample_id',
  create:function(values,t){
    return this.set(values)
    .save(null,{
      method:'insert',
      transacting:t
    });
  },
  findAll:function(){
    return this.fetchAll();
  },
  find:function(values,t){
    return this.fetch();
  },
  update:function(values,t){
    return this.save(values,{
      method:'update',
      patch:true,
      transacting:t
    });
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
