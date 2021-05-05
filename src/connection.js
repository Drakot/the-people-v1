const mongoose = require("mongoose")

const password = "password123456"
const dbname = "people"
const user = "albertoadmin"
const host = "cluster0.xgpjx.mongodb.net"

const uri = `mongodb+srv://${user}:${password}@${host}/${dbname}?retryWrites=true&w=majority`

module.exports = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })