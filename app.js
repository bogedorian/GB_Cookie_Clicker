const express = require("express")
const app = express()
const port = 3000
var http = require ("http")


app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.get("", (req, res) => {
    res.sendFile(__dirname + "/public/clicker.html")
})

app.listen(port, () => console.log("Current port is "+ port))