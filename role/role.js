const mongoose = require ("mongoose");

const roleSchema = mongoose.Schema({
    role: {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true         
    } 
});

module.exports = mongoose.model("Role", roleSchema);