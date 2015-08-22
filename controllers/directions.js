'use strict';
/**
 * Account Controller
 */

module.exports.controller = function (app) {

  app.post('/directions', function (req, res) {
    console.log("This");
    console.log(req.body);
    res.render('directions/directions', {
    });
  });

  app.get('/directions', function (req, res) {
    res.render('directions/directions', {
    });
  });
};
