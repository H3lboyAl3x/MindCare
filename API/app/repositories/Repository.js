import Usuario from "../models/Usuario.js";
import Pacientes from "../models/Pacientes.js";
import Profissionais from "../models/Profissionais.js";
import Experiencias from "../models/Experiencias.js";
import Horarios from "../models/Horarios.js";
import Semanas from "../models/Semanas.js";
import Consultas from "../models/Consultas.js";
import Chat from "../models/Chat.js";
import Mensagem from "../models/Mensagem.js";
 
//PARA O USUARIO_____________________________________________________________________
//adicionar usurio
export const createUsuario = async (userData) => {
    return await Usuario.create(userData);
};
//buscar todos os usuarios
export const getAllUsuario = async () => {
    return await Usuario.findAll();
};
//buscar um usuario por id
export const getUsuarioById = async (id) => {
    return await Usuario.findByPk(id);
};
//atualizar usuario
export const uptadeUsuario = async (id, updates) => {
    const user = await Usuario.findByPk(id);
    if (!user) {
        return null;
    }
    return await user.update(updates);
};
//apagar usuario
export const deleteUsuario = async (id) => {
    const user = await Usuario.findByPk(id);
    if (!user) {
        return null
    }
    await user.destroy();
    return true;
}

// PARAPACIENTES________________________________________________
// adicionar paciente
export const createPaciente = async (pacienteData) => {
    return await Pacientes.create(pacienteData);
};
// buscar todos os pacientes
export const getAllPacientes = async () => {
    return await Pacientes.findAll();
};
// buscar um paciente por id
export const getPacienteById = async (id) => {
    return await Pacientes.findByPk(id);
};
// atualizar paciente
export const updatePaciente = async (id, updates) => {
    const paciente = await Pacientes.findByPk(id);
    if (!paciente) {
        return null;
    }
    return await paciente.update(updates);
};
// apagar paciente
export const deletePaciente = async (id) => {
    const paciente = await Pacientes.findByPk(id);
    if (!paciente) {
        return null
    }
    await paciente.destroy();
    return true;
};


//PARAPROFISSIONAIS___________________________________________
// adicionar profissional
export const createProfissional = async (profissionalData) => {
    return await Profissionais.create(profissionalData);
};
// buscar todos os profissionais
export const getAllProfissionais = async () => {
    return await Profissionais.findAll();
};
// buscar um profissional por id
export const getProfissionalById = async (id) => {
    return await Profissionais.findByPk(id);
};
// atualizar profissional
export const updateProfissional = async (id, updates) => {
    const profissional = await Profissionais.findByPk(id);
    if (!profissional) {
        return null;
    }
    return await profissional.update(updates);
};
// apagar profissional
export const deleteProfissional = async (id) => {
    const profissional = await Profissionais.findByPk(id);
    if (!profissional) {
        return null
    }
    await profissional.destroy();
    return true;
};


//PARA A EXPERIENCIA___________________________________________
//adicionar xperiencia
export const createExperiencia = async (expData) => {

    return await Experiencias.create(expData);
};
//buscar todas as experiencias
export const getAllExperiencias = async () => {
    return await Experiencias.findAll();
};
//buscar uma experiencia por id
export const getExperienciaById = async (id) => {
    return await Experiencias.findByPk(id);
};
//atualizar experiencia
export const updateExperiencia = async (id, updates) => {
    const exp = await Experiencias.findByPk(id);
    if (!exp) {
        return null;
    }
    return await exp.update(updates);
};
//apagar experiencia
export const deleteExperiencia = async (id) => {
    const user = await Usuario.findByPk(id);
    if (!user) {
        return null
    }
    await user.destroy();
    return true;
}


//PARAHORARIOS_______________________________________________
// adicionar horario
export const createHorario = async (horarioData) => {
    return await Horarios.create(horarioData);
};
// buscar todos os horarios
export const getAllHorarios = async () => {
    return await Horarios.findAll();
};
// buscar um horario por id
export const getHorarioById = async (id) => {
    return await Horarios.findByPk(id);
};
// atualizar horario
export const updateHorario = async (id, updates) => {
    const horario = await Horarios.findByPk(id);
    if (!horario) {
        return null;
    }
    return await horario.update(updates);
};
// apagar horario
export const deleteHorario = async (id) => {
    const horario = await Horarios.findByPk(id);
    if (!horario) {
        return null
    }
    await horario.destroy();
    return true;
};

//PARASEMANAS_______________________________________________
// adicionar semana
export const createSemana = async (semanaData) => {
    return await Semanas.create(semanaData);
};
// buscar todas as semanas
export const getAllSemanas = async () => {
    return await Semanas.findAll();
};
// buscar uma semana por id
export const getSemanaById = async (id) => {
    return await Semanas.findByPk(id);
};
// atualizar semana
export const updateSemana = async (id, updates) => {
    const semana = await Semanas.findByPk(id);
    if (!semana) {
        return null;
    }
    return await semana.update(updates);
};
// apagar semana
export const deleteSemana = async (id) => {
    const semana = await Semanas.findByPk(id);
    if (!semana) {
        return null
    }
    await semana.destroy();
    return true;
};


//PARACONSULTAS______________________________________________
// adicionar consulta
export const createConsulta = async (consultaData) => {
    return await Consultas.create(consultaData);
};
// buscar todas as consultas
export const getAllConsultas = async () => {
    return await Consultas.findAll();
};
// buscar uma consulta por id
export const getConsultaById = async (id) => {
    return await Consultas.findByPk(id);
};
// atualizar consulta
export const updateConsulta = async (id, updates) => {
    const consulta = await Consultas.findByPk(id);
    if (!consulta) {
        return null;
    }
    return await consulta.update(updates);
};
// apagar consulta
export const deleteConsulta = async (id) => {
    const consulta = await Consultas.findByPk(id);
    if (!consulta) {
        return null
    }
    await consulta.destroy();
    return true;
};

//PARACHAT__________________________________________________
// adicionar chat
export const createChat = async (chatData) => {
    return await Chat.create(chatData);
};
// buscar todos os chats
export const getAllChats = async () => {
    return await Chat.findAll();
};
// buscar um chat por id
export const getChatById = async (id) => {
    return await Chat.findByPk(id);
};
// atualizar chat
export const updateChat = async (id, updates) => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
        return null;
    }
    return await chat.update(updates);
};
// apagar chat
export const deleteChat = async (id) => {
    const chat = await Chat.findByPk(id);
    if (!chat) {
        return null
    }
    await chat.destroy();
    return true;
};

//PARAMENSAGEM______________________________________________
// adicionar mensagem
export const createMensagem = async (mensagemData) => {
    return await Mensagem.create(mensagemData);
};
// buscar todas as mensagens
export const getAllMensagens = async () => {
    return await Mensagem.findAll();
};
// buscar uma mensagem por id
export const getMensagemById = async (id) => {
    return await Mensagem.findByPk(id);
};
// atualizar mensagem
export const updateMensagem = async (id, updates) => {
    const mensagem = await Mensagem.findByPk(id);
    if (!mensagem) {
        return null;
    }
    return await mensagem.update(updates);
};
// apagar mensagem
export const deleteMensagem = async (id) => {
    const mensagem = await Mensagem.findByPk(id);
    if (!mensagem) {
        return null
    }
    await mensagem.destroy();
    return true;
};
