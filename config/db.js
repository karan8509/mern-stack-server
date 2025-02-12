const mongoose = require("mongoose")


const Connections = async () => {
    try {
        await mongoose.connect("mongodb+srv://userdata:userdata@cluster0.ju1qxkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MONGODB CONNECTIONS ON ")
    } catch (error) {
        console.log("MONGODB  NOT CONNECTIONS ")
    }
}


module.exports = Connections