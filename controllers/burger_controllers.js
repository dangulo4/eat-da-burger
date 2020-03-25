// Import Dependencies
var express = require('express');

// Import the model
var burger = require('../models/burger.js');

var router = express.Router();

// Create all routes with logic
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// Add burger to db
router.post('/api/burgers', function(req, res) {
  burger.insert(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      // send back the ID
      res.json({ id: result.insertId });
    }
  );
});

// Update existing burger
router.put('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // if no rows changed, send 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Delete burger from db
router.delete('/api/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows === 0) {
      // If no rows changed, send 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export route for server.js
module.exports = router;
