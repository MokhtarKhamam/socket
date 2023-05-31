const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const {Server} = require("socket.io");

const io = new Server(server, {
    cors : {
        origin : "http://localhost:3000",
        methods : ["POST", "GET"],
    },
})


io.on("connection", (socket) => {
    console.log(`user connected : ${socket.id}`)

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log(`user with id : ${socket.id} joined room ${data}`)
    })

    socket.on("disconnect", () => {
        console.log("user disconnect", socket.id)
    })
})

app.use(cors());



server.listen(3001, () => {
    console.log("server running")
})
