const mongoose = require ("mongoose");

const adminSchema = mongoose.Schema({
    firstName : { 
        type : String,    
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dateCreate : { 
        type : Date, 
        default : Date.now 
    }, 
    role : [{
        type : mongoose.Types.ObjectId,
        ref : "Role"
    }]
})

module.exports = mongoose.model("Admin", adminSchema);