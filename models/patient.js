/**
 * Created by zedan on 1/11/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.Types.ObjectId;

var patientModel = new Schema({

    "id":{
        type:String,
    }
    ,"firstName":{
        type:String,
    },
    "lastName":{
        type:String,
    }
    ,"fatherNam":{
        type:String,
    },
    "birthday":{
        type:String,
    }
    ,"gender":{
        type:String,
    },
    "city":{
        type:String,
    },
    "address":{
        type:String,
    }
    ,"phone":{
        type:String,
    }
    ,"box":{
        type:String,
    },
    inspectionArray:[ { type: ObjectId, ref: 'inspection' } ]
    ,"note":{
        type:String,
    }

});
module.exports= mongoose.model('patient', patientModel);