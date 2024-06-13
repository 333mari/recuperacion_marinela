"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllers = require("../controllers/controllers.persona");
var rutaPersona = (0, _express.Router)();
rutaPersona.get("/usuario/:id", _controllers.mostrarPersona);
rutaPersona.get("/usuario/", _controllers.listarPersona);
rutaPersona.post("/usuario/", _controllers.crearPersona);
rutaPersona.put("/usuario/", _controllers.modificarPersona);
rutaPersona["delete"]("/usuario/", _controllers.eliminarPersona);
var _default = exports["default"] = rutaPersona;