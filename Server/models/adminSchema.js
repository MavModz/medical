const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
    },
    phone:{
        type :String  ,
        unique: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    birth:{
        type: String,
        unique: true,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    }

});

const admins = new mongoose.model("admins",adminSchema);

module.exports = admins;