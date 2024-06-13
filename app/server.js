import express from "express";
import rutaPersona from "./routes/routes.persona";

const server = express();

server.use("/user", rutaPersona);

//Middleware
app.use(express.json());

export default server;

