const mongoose = require("mongoose")
require("dotenv").config()

const Connections = async () => {
    try {
        await mongoose.connect(process.env.URL_DATABASE)
        console.log("MONGODB CONNECTIONS ON ")
    } catch (error) {
        console.log("MONGODB  NOT CONNECTIONS ")
    }
}


module.exports = Connections