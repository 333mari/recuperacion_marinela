import { Router } from "express";
import { crearPersona, eliminarPersona, listarPersona, modificarPersona, mostrarPersona } from "../controllers/controllers.persona";

const rutaPersona = Router();

rutaPersona.get("/usuario/:id", mostrarPersona)
rutaPersona.get("/usuario/", listarPersona)
rutaPersona.post("/usuario/", crearPersona)
rutaPersona.put("/usuario/", modificarPersona)
rutaPersona.delete("/usuario/", eliminarPersona)

export default rutaPersona;