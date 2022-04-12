const express =require("express")
const userRoute = require("./routes/usersRoutes")
const path = require("path")
const logger=require("./middlewares/user.logger")
const booksRoute = require("./routes/booksRoute")

const app = express()

//middlewires
app.use(express.json());
app.use(logger)
app.use(userRoute)
app.use(booksRoute)

//home route
app.get("/", (req, res)=>{
    res.status(200).send("<h1>WELCOME TO MY USERS DATABASE</h1>");
})

const PORT = 4000;


app.listen(PORT, ()=>{
console.log("SERVER IS UP")

})