// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Burger.findAll({
            order: [
                ['burger_name', 'ASC']
            ]
        }).then(function (data) {
            var hbsObject = {
                burgers: data
            };
            res.render('index', hbsObject);
        });
    });

    app.post('/api/burgers', function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (data) {
            return res.status(200).end();
        }).catch(function (err) {
            return res.json(err).status(400);
        });
    });

    app.put('/api/burgers/:id', function (req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            return res.status(200).end();
        }).catch(function (err) {
            return res.json(err).status(400);
        });
    });

    app.delete('/api/delete/:id', function (req, res) {
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            return res.status(200).end();
        });
    });

    //END ROUTES
};