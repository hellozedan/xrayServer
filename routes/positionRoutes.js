/**
 * Created by zedan on 1/11/2017.
 */
var express = require('express');


var routes = function(O) {
    var Router = express.Router();

    var Controller = require("../controllers/positionController")(O);

    Router.route('/getAll').get(Controller.getAll);
    Router.route('/addNew').post(Controller.addNew);
    return Router;
};

module.exports =  routes;