/**
 * Created by zedan on 1/11/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var partPhotoModel = new Schema({

    "name":{
        type:String,
    }

});
module.exports= mongoose.model('partPhoto', partPhotoModel);