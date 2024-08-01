const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT;

//test route
app.get("/", (req, res) => { // request, response
    res.send("nice job");
});




app.listen(PORT || 8000, ()=> { //this allows the server to choose the default port (the number) or it uses the one in the .env file (PORT) as backup
    console.log(`server listening to port ${PORT}`)
})