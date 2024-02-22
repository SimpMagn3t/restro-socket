const express = require("express");
const app=express();
const {Server}=require("socket.io");
const http = require("http");
// const server = new Server(app);
// const io=new Server(server);
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "http://localhost:3000"}});
const dotenv=require("dotenv").config();
const mongoose=require("mongoose")

const adminRoutes=require("./routes/adminRoutes")
const userRoutes=require("./routes/userRoutes")

app.use(express.json());
const port=process.env.PORT
const mongoUrl=process.env.mongoUrl
const food=require("./models/foodItemModels");
mongoose.connect(mongoUrl).then(()=>console.log("database connected"))
const cors=require("cors");
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.use('/admin',adminRoutes)
app.use('/user',userRoutes)
io.on("connection",(socket)=>{
    console.log(`web socket connected ${socket.id}`);
    socket.on("newOrder",(o)=>{
        console.log(o);
        io.emit("newOr",o);
    });
})
server.listen(port,()=>{
    console.log(`running on port${port}`);
})
// http.listen(port,()=>console.log(`Socket listening${port}`))


