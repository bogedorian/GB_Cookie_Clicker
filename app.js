const express = require("express")
const app = express()
const port = 3000
var http = require ("http")

var Cookies = require ("cookies")


var server = http.createServer(function (req, res){
var scookies = new Cookies(req, res, {keys: keys})

var lastCookies = scookies.get('lastCookies', {signed: true})

scookies.set('lastCookies', cookies, {signed: true})

if (!lastCookies) {
    res.setHeader('Content-Type', 'text/plain')
    res.end("Welcome!")
}   else {
    res.setHeader('Content-Type', 'text/plain')
    res.end("Welcome back! You baked " +lastCookies+ " Cookies last time")
}
})


app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/img", express.static(__dirname + "public/img"))

app.get("", (req, res) => {
    res.sendFile(__dirname + "/public/clicker.html")
})

app.listen(port, () => console.log("Current port is "+ port))