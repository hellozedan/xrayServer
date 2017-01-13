/**
 * Created by zedan on 1/11/2017.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var inspectionModel = new Schema({

    "code":{
        type:String,
    },
    "patient":{
        type:{ type: ObjectId, ref: 'patient', index:true },
    }
    ,"partPhoto":{
        type:String,
    },
    "side":{
        type:String,
    },
    "position":{
        type:String,
    },

    "registrationDate":{
        type:String,
    }
    ,"visitDate":{
        type:String,
    }
    ,
    "box":{
        type:String,
    }

    ,"reason":{
        type:String,
    }

    ,
    "doctorDecoder":{
        type:String,
    },
    "doctorTurning":{
        type:String,
    },
    "Receptionist":{
        type:String,
    }
    ,"operationTechnician":{
        type:String,
    },
    "document":{
        type:String
    },
    "status":{
        type:String,
    }
    ,"answer":{
    type:String,

    }
    ,"message": {
        type: String,
    }
});
module.exports= mongoose.model('inspection', inspectionModel);