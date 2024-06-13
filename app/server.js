import express from "express";
import rutaPersona from "./routes/routes.persona";

const app = express();

app.use("/user", rutaPersona);

//Middleware
app.use(express.json());

export default app;

