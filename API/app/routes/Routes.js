import express from "express";
import * as Controller from "../controllers/Controller.js";

const router = express.Router();

//PARA O USUARIO__________________________________________
router.get("/users", Controller.getAllUsuario);
router.post("/users", Controller.createUsuario);
router.get("/users/:id", Controller.getUsuarioById);
router.get("/users/:id", Controller.uptadeUsuario);
router.get("/users/:id", Controller.deleteUsuario);

//PARA O PACIENTE______________________________________________

//PARA O PROFISSIONAL__________________________________________

//PARA A EXPERIENCIA___________________________________________

//PARA O HORARIO_______________________________________________

//PARA A SEMANA________________________________________________

//PARA A CONSULTA______________________________________________

//PARA O CHAT__________________________________________________

//PARA A MENSAGEM______________________________________________
export default router;