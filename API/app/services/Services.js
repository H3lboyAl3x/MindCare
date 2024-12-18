import * as Repository from '../repositories/Repository.js'

//PARA O USUARIO_____________________________________________
export const createUsuario = async (userData) => {
    return await Repository.createUsuario(userData);
};

export const getAllUsuario = async () => {
    return await Repository.getAllUsuario();
};

export const getUsuarioById = async (id) => {
    return await Repository.getUsuarioById(id);
};

export const uptadeUsuario = async (id, userData) => {
    return await Repository.uptadeUsuario(id, userData);
};

export const deleteUsuario = async (id) => {
    return await Repository.deleteUsuario(id);
};

//PARA O PACIENTE______________________________________________
export const createPaciente = async(pacData) => {
    return await Repository.createPaciente(pacData);
};

export const getAllPacientes = async(pacData) => {
    return await Repository.getAllPacientes(pacData);
};
export const getPacienteById = async(pacData) => {
    return await Repository.getPacienteById(pacData);
};
export const updatePaciente = async(id, pacienteData) => {
    return await Repository.updatePaciente(id, pacienteData);
};
export const deletePaciente = async(id) => {
    return await Repository.deletePaciente
}

//PARA O PROFISSIONAL__________________________________________
// adicionar profissional
export const createProfissional = async (profissionalData) => {
    return await Repository.createProfissional(profissionalData);
};
// buscar todos os profissionais
export const getAllProfissionais = async () => {
    return await Repository.getAllProfissionais();
};
// buscar um profissional por id
export const getProfissionalById = async (id) => {
    return await Repository.getProfissionalById(id);
};
// atualizar profissional
export const updateProfissional = async (id, profissionalData) => {
    return await Repository.updateProfissional(id, profissionalData);
};
// apagar profissional
export const deleteProfissional = async (id) => {
    return await Repository.deleteProfissional(id);
};

//PARA A EXPERIENCIA___________________________________________
// adicionar experiencia
export const createExperiencia = async (expData) => {
    return await Repository.createExperiencia(expData);
};
// buscar todas as experiencias
export const getAllExperiencias = async () => {
    return await Repository.getAllExperiencias();
};
// buscar uma experiencia por id
export const getExperienciaById = async (id) => {
    return await Repository.getExperienciaById(id);
};
// atualizar experiencia
export const updateExperiencia = async (id, expData) => {
    return await Repository.updateExperiencia(id, expData);
};
// apagar experiencia
export const deleteExperiencia = async (id) => {
    return await Repository.deleteExperiencia(id);
};

//PARA O HORARIO_______________________________________________
// adicionar horario
export const createHorario = async (horarioData) => {
    return await Repository.createHorario(horarioData);
};
// buscar todos os horarios
export const getAllHorarios = async () => {
    return await Repository.getAllHorarios();
};
// buscar um horario por id
export const getHorarioById = async (id) => {
    return await Repository.getHorarioById(id);
};
// atualizar horario
export const updateHorario = async (id, horarioData) => {
    return await Repository.updateHorario(id, horarioData);
};
// apagar horario
export const deleteHorario = async (id) => {
    return await Repository.deleteHorario(id);
};

//PARA A SEMANA________________________________________________
// adicionar semana
export const createSemana = async (semanaData) => {
    return await Repository.createSemana(semanaData);
};
// buscar todas as semanas
export const getAllSemanas = async () => {
    return await Repository.getAllSemanas();
};
// buscar uma semana por id
export const getSemanaById = async (id) => {
    return await Repository.getSemanaById(id);
};
// atualizar semana
export const updateSemana = async (id, semanaData) => {
    return await Repository.updateSemana(id, semanaData);
};
// apagar semana
export const deleteSemana = async (id) => {
    return await Repository.deleteSemana(id);
};

//PARA A CONSULTA______________________________________________
// adicionar consulta
export const createConsulta = async (consultaData) => {
    return await Repository.createConsulta(consultaData);
};
// buscar todas as consultas
export const getAllConsultas = async () => {
    return await Repository.getAllConsultas();
};
// buscar uma consulta por id
export const getConsultaById = async (id) => {
    return await Repository.getConsultaById(id);
};
// atualizar consulta
export const updateConsulta = async (id, consultaData) => {
    return await Repository.updateConsulta(id, consultaData);
};
// apagar consulta
export const deleteConsulta = async (id) => {
    return await Repository.deleteConsulta(id);
};

//PARA O CHAT__________________________________________________
// adicionar chat
export const createChat = async (chatData) => {
    return await Repository.createChat(chatData);
};
// buscar todos os chats
export const getAllChats = async () => {
    return await Repository.getAllChats();
};
// buscar um chat por id
export const getChatById = async (id) => {
    return await Repository.getChatById(id);
};
// atualizar chat
export const updateChat = async (id, chatData) => {
    return await Repository.updateChat(id, chatData);
};
// apagar chat
export const deleteChat = async (id) => {
    return await Repository.deleteChat(id);
};

//PARA A MENSAGEM______________________________________________
// adicionar mensagem
export const createMensagem = async (mensagemData) => {
    return await Repository.createMensagem(mensagemData);
};
// buscar todas as mensagens
export const getAllMensagens = async () => {
    return await Repository.getAllMensagens();
};
// buscar uma mensagem por id
export const getMensagemById = async (id) => {
    return await Repository.getMensagemById(id);
};
// atualizar mensagem
export const updateMensagem = async (id, mensagemData) => {
    return await Repository.updateMensagem(id, mensagemData);
};
// apagar mensagem
export const deleteMensagem = async (id) => {
    return await Repository.deleteMensagem(id);
};
