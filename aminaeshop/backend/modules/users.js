const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);