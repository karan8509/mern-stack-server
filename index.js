const express = require("express")
const Connections = require("./config/db.js")
const UserModel = require("./modules/User.js")
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 8080;


app.get("/", async (req, res) => {
    try {
        const users = await UserModel.find()
        res.json({ success: true, users });
    } catch (error) {
        res.json({
            message: error.message || "Something went wrong!",
            success: false
        })
    }
})


app.get('/getUser/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const users = await UserModel.findById(id)
        res.json({ success: true, users });
    } catch (error) {
        res.json({
            message: error.message || "Something went wrong!",
            success: false
        })
    }
})


app.put("/updataUser/:id", async (req, res) => {
    const id = req.params.id
    try {
        await UserModel.findOneAndUpdate(id, { name: req.body.name, age: req.body.age, mobile: req.body.mobile, })
        res.json({
            message: "Successfully Updata ", success: true
        })

    } catch (error) {
        res.json({ message: error.message || "Something went wrong!", success: false })
    }
})


app.delete('/deleteUser/:id', async (req, res) => {
    const id = req.params.id
    try {
        await UserModel.findByIdAndDelete(id)
        res.json({ message: "Successfully delete ", success: true })
    } catch (error) {
        res.json({ message: error.message || "Something went wrong!", success: false })

    }
})





app.post("/createUser", async (req, res) => {
    try {
        const { username, userage, usermobile } = req.body
        await UserModel.create({
            name: username,
            age: userage,
            mobile: usermobile
        })
        res.json({ message: "User Create Successfully ", success: true, });
    } catch (error) {
        res.json({
            message: error.message || "Something went wrong!",
            success: false
        })
    }
})



app.listen(PORT, async () => {
    console.log(`Server running at http://localhost:${PORT}`);
    await Connections()
})