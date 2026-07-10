let sunucu = require("http")
const fileSys = require("fs")

sunucu.createServer(function (request, response) {
    global.myVar = new Date
    console.log(global.myVar)

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end("Merhaba Dünya! NodeJS öğreniyorum!")

        fileSys.readFile("nodeServer.js", "utf-8", function (error, data) {
        if (error) throw error
        console.log(data)
    })
}).listen(8394)




