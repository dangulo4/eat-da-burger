// Import ORM to create functions to interact with db
var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // The variables col and vals are arrays
  insertBurger: function(cols, vals, cb) {
    orm.insertBurger('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  updateBurger: function(objColVals, condition, cb) {
    orm.updateBurger('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteBurger: function(condition, cb) {
    orm.deleteBurger('burgers', condition, function(res) {
      cb(res);
    });
  }
};

// Export the db functions for the controller (burger_Controller.js)
module.exports = burger;
