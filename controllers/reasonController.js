
var Utils = require('../utils/utils.js');
var User = require('../models/user.js');
var Collection = require('../models/reason.js');
var mongoose = require('mongoose');

var Controller = function (Collection) {

    var addNew = function (req, res) {
        var model = req.body;
        var newModel = new Collection(model);
        newModel.save(function (e, newModel) {
            if (e) {
                console.log('error');
                console.log('e: ' + e);
                res.status(500).send(err);
            } else {
                console.log('newModel - success.');
                res.status(201).send("success");

            }
        });
    };

    var getAll = function (req, res) {
        var query = {};

        Collection.find(query).sort({'_id': 'descending'}).exec(query, function (err, array) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(array);
            }
        });
    }



    return {
        addNew: addNew,
        getAll: getAll
    };

};
module.exports = Controller;