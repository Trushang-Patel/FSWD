const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    User_name:String,
    User_gender:String
});

const mymodel = mongoose.model('Users',UserSchema);

module.exports = mymodel;