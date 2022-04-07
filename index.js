const express =require("express")

const usersRoutes = require("./routes/usersRoutes")

const app = express()
//middlewares
app.use(express.json());

app.use(usersRoutes)

//home route
app.get("/", (req, res)=>{
    res.status(200).send("<h1>WELCOM TO THE USERS DATABASE</H1>");
    
})
const PORT = 4000;

app.listen(PORT,  ()=>{
    console.log("server is UP")

})