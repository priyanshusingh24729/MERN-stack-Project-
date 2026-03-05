
const mongoose = require ('mongoose')


const fiverschema = new mongoose.Schema({
    name: String,
    age:  Number,
    address: String,
    email: String,
    password: String

})


const fivermodel =mongoose.model("fivers",fiverschema)

module.exports = fivermodel