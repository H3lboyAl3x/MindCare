import express from "express";
import * as Controller from "../controllers/Controller.js";

const router = express.Router();

//PARA O USUARIO__________________________________________
router.get("/users", Controller.getAllUsuario);
router.post("/users", Controller.createUsuario);
router.get("/users/:id", Controller.getUsuarioById);
router.put("/users/:id", Controller.uptadeUsuario);  // Alterado para PUT para atualização
router.delete("/users/:id", Controller.deleteUsuario);

//PARA O PACIENTE_________________________________________
router.get("/pacientes", Controller.getAllPacientes);
router.post("/pacientes", Controller.createPaciente);
router.get("/pacientes/:id", Controller.getPacienteById);
router.put("/pacientes/:id", Controller.updatePaciente);
router.delete("/pacientes/:id", Controller.deletePaciente);

//PARA O PROFISSIONAL_____________________________________
router.get("/profissionais", Controller.getAllProfissionais);
router.post("/profissionais", Controller.createProfissional);
router.get("/profissionais/:id", Controller.getProfissionalById);
router.put("/profissionais/:id", Controller.updateProfissional);
router.delete("/profissionais/:id", Controller.deleteProfissional);

//PARA A EXPERIENCIA______________________________________
router.get("/experiencias", Controller.getAllExperiencias);
router.post("/experiencias", Controller.createExperiencia);
router.get("/experiencias/:id", Controller.getExperienciaById);
router.put("/experiencias/:id", Controller.updateExperiencia);
router.delete("/experiencias/:id", Controller.deleteExperiencia);

//PARA O HORARIO__________________________________________
router.get("/horarios", Controller.getAllHorarios);
router.post("/horarios", Controller.createHorario);
router.get("/horarios/:id", Controller.getHorarioById);
router.put("/horarios/:id", Controller.updateHorario);
router.delete("/horarios/:id", Controller.deleteHorario);

//PARA A SEMANA___________________________________________
router.get("/semanas", Controller.getAllSemanas);
router.post("/semanas", Controller.createSemana);
router.get("/semanas/:id", Controller.getSemanaById);
router.put("/semanas/:id", Controller.updateSemana);
router.delete("/semanas/:id", Controller.deleteSemana);

//PARA A CONSULTA_________________________________________
router.get("/consultas", Controller.getAllConsultas);
router.post("/consultas", Controller.createConsulta);
router.get("/consultas/:id", Controller.getConsultaById);
router.put("/consultas/:id", Controller.updateConsulta);
router.delete("/consultas/:id", Controller.deleteConsulta);

//PARA O CHAT_____________________________________________
router.get("/chats", Controller.getAllChats);
router.post("/chats", Controller.createChat);
router.get("/chats/:id", Controller.getChatById);
router.put("/chats/:id", Controller.updateChat);
router.delete("/chats/:id", Controller.deleteChat);

//PARA A MENSAGEM________________________________________
router.get("/mensagens", Controller.getAllMensagens);
router.post("/mensagens", Controller.createMensagem);
router.get("/mensagens/:id", Controller.getMensagemById);
router.put("/mensagens/:id", Controller.updateMensagem);
router.delete("/mensagens/:id", Controller.deleteMensagem);

//PARA A NumeroP________________________________________
router.get("/numeroP", Controller.getAllNumeroP);
router.post("/numeroP", Controller.createNumeroP);
router.get("/numeroP/:id", Controller.getNumeroPById);
router.put("/numeroP/:id", Controller.updateNumeroP);
router.delete("/numeroP/:id", Controller.deleteNumeroP);

//PARA A SemanasProf________________________________________
router.get("/semanasprof", Controller.getAllSemanasProf);
router.post("/semanasprof", Controller.createSemanasProf);
router.get("/semanasprof/:id", Controller.getSemanasProfById);
router.put("/semanasprof/:id", Controller.updateSemanasProf);
router.delete("/semanasprof/:id", Controller.deleteSemanasProf);

//PARA A HorarioProf________________________________________
router.get("/horarioprof", Controller.getAllHorarioProf);
router.post("/horarioprof", Controller.createHorarioProf);
router.get("/horarioprof/:id", Controller.getHorarioProfById);
router.put("/horarioprof/:id", Controller.updateHorarioProf);
router.delete("/horarioprof/:id", Controller.deleteHorarioProf);

//PARA A ExperienciaProf________________________________________
router.get("/experienciaprof", Controller.getAllExperienciaProf);
router.post("/experienciaprof", Controller.createExperienciaProf);
router.get("/experienciaprof/:id", Controller.getExperienciaProfById);
router.put("/experienciaprof/:id", Controller.updateExperienciaProf);
router.delete("/experienciaprof/:id", Controller.deleteExperienciaProf);

export default router;
