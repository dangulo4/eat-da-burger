// Import ORM to create functions to interact with db
var orm = require('../config/orm');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // The variables col and vals are arrays
  insert: function(cols, vals, cb) {
    orm.insert('burgers', cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete('burgers', condition, function(res) {
      cb(res);
    });
  }
};

// Export the db functions for the controller (burger_Controller.js)
module.exports = burger;
