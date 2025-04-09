

const {createServer}  = require("http");
const next = require("next")
const initSocket = require("./socketServer".default)

const app  = next({dev:true})
const handle = app.getRequestHandler()


app.prepare().then(()=>{
    const server = createServer((req,res)=>handle(req,res))
    initSocket(server)
    server.listen(3000,()=>{
        console.log("server listening on http://localhost:3000")
    })
})