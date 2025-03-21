import Usuarios from "../models/Usuarios.js";
import Pacientes from "../models/Pacientes.js";
import Profissionais from "../models/Profissionais.js";
import Horarios from "../models/Horarios.js";
import Semanas from "../models/Semanas.js";
import Consultas from "../models/Consultas.js";
import chats from "../models/Chats.js";
import Mensagem from "../models/Mensagem.js";
import NumeroP from "../models/NumeroP.js";
import SemanasProf from "../models/SemanaProf.js";
import HorarioProf from "../models/HorarioProf.js";
import AreaTrabalho from "../models/AreTrabalho.js";
import AreaProf from "../models/AreaProf.js";
 
//PARA O USUARIO_____________________________________________________________________
//adicionar usurio
export const createUsuario = async (userData) => {
    return await Usuarios.create(userData);
};
//buscar todos os usuarios
export const getAllUsuario = async () => {
    return await Usuarios.findAll();
};
//buscar um usuario por id
export const getUsuarioById = async (id) => {
    return await Usuarios.findByPk(id);
};

//buscar um usuario por Nome e Password(Login)
export const getUsuarioByLogin = async (nome, password) => {
    return await Usuarios.findOne({ where: { nome, password } });
};


//atualizar usuario
export const uptadeUsuario = async (id, updates) => {
    const user = await Usuarios.findByPk(id);
    if (!user) {
        return null;
    }
    return await user.update(updates);
};
//apagar usuario
export const deleteUsuario = async (id) => {
    const user = await Usuarios.findByPk(id);
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

// buscar um pacinete por chave estrangeira
export const getPacienteByfk = async (iduser) => {
    return await Pacientes.findOne({where: {iduser}})
}

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
    return await chats.create(chatData);
};
// buscar todos os chats
export const getAllChats = async () => {
    return await chats.findAll();
};
// buscar um chat por id
export const getChatById = async (id) => {
    return await chats.findByPk(id);
};
// atualizar chat
export const updateChat = async (id, updates) => {
    const chat = await chats.findByPk(id);
    if (!chat) {
        return null;
    }
    return await chat.update(updates);
};
// apagar chat
export const deleteChat = async (id) => {
    const chat = await chats.findByPk(id);
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

//PARANUMEROP______________________________________________
// adicionar Numerop
export const createNumeroP = async (numeroPData) => {
    return await NumeroP.create(numeroPData);
};
// buscar todas as NumeroP
export const getAllNumeroP = async () => {
    return await NumeroP.findAll();
};
// buscar uma NumeroP por id
export const getNumeroPById = async (id) => {
    return await NumeroP.findByPk(id);
};
// atualizar NumeroP
export const updateNumeroP = async (id, updates) => {
    const numeroP = await NumeroP.findByPk(id);
    if (!numeroP) {
        return null;
    }
    return await numeroP.update(updates);
};
// apagar NumeroP
export const deleteNumeroP = async (id) => {
    const numeroP = await NumeroP.findByPk(id);
    if (!numeroP) {
        return null
    }
    await numeroP.destroy();
    return true;
};

//PARASEMANASPROF______________________________________________
// adicionar SemanasProf
export const createSemanasProf = async (semanasProfData) => {
    return await SemanasProf.create(semanasProfData);
};
// buscar todas as SemanasProf
export const getAllSemanasProf = async () => {
    return await SemanasProf.findAll();
};
// buscar uma SemanasProf por id
export const getSemanasProfById = async (id) => {
    return await SemanasProf.findByPk(id);
};
// atualizar SemanasProf
export const updateSemanasProf = async (id, updates) => {
    const semanasprof = await SemanasProf.findByPk(id);
    if (!semanasprof) {
        return null;
    }
    return await semanasprof.update(updates);
};
// apagar SemanasProf
export const deleteSemanasProf = async (id) => {
    const semanasprof = await SemanasProf.findByPk(id);
    if (!semanassrof) {
        return null
    }
    await semanasprof.destroy();
    return true;
};

//PARAHORARIOPROF______________________________________________
// adicionar HorarioProf
export const createHorarioProf = async (HorarioProfData) => {
    return await HorarioProf.create(HorarioProfData);
};
// buscar todas as HorarioProf
export const getAllHorarioProf= async () => {
    return await HorarioProf.findAll();
};
// buscar uma HorarioProf por id
export const getHorarioProfById = async (id) => {
    return await HorarioProf.findByPk(id);
};
// atualizar HorarioProf
export const updateHorarioProf = async (id, updates) => {
    const horarioprof = await HorarioProf.findByPk(id);
    if (!horarioprof) {
        return null;
    }
    return await horarioprof.update(updates);
};
// apagar HorarioProf
export const deleteHorarioProf = async (id) => {
    const horarioprof = await HorarioProf.findByPk(id);
    if (!horarioprof) {
        return null
    }
    await horarioprof.destroy();
    return true;
};

// adicionar AreaTrabalho
export const createAreaTrabalho = async (AreaTrabalhoData) => {
    return await AreaTrabalho.create(AreaTrabalhoData);
};
// buscar todas as AreaTrabalho
export const getAllAreaTrabalho= async () => {
    return await AreaTrabalho.findAll();
};
// buscar uma AreaTrabalho por id
export const getAreaTrabalhoById = async (id) => {
    return await AreaTrabalho.findByPk(id);
};
// atualizar AreaTrabalho
export const updateAreaTrabalho = async (id, updates) => {
    const areatrabalho = await AreaTrabalho.findByPk(id);
    if (!areatrabalho) {
        return null;
    }
    return await areatrabalho.update(updates);
};
// apagar AreaTrabalho
export const deleteAreaTrabalho = async (id) => {
    const areatrabalho = await AreaTrabalho.findByPk(id);
    if (!areatrabalho) {
        return null
    }
    await areatrabalho.destroy();
    return true;
};

// adicionar AreaProf
export const createAreaProf = async (AreaProfData) => {
    return await AreaProf.create(AreaProfData);
};
// buscar todas as AreaProf
export const getAllAreaProf= async () => {
    return await AreaProf.findAll();
};
// buscar uma AreaProf por id
export const getAreaProfById = async (id) => {
    return await AreaProf.findByPk(id);
};
// atualizar AreaProf
export const updateAreaProf = async (id, updates) => {
    const areaprof = await AreaProf.findByPk(id);
    if (!areaprof) {
        return null;
    }
    return await areaprof.update(updates);
};
// apagar AreaProf
export const deleteAreaProf = async (id) => {
    const areaprof = await AreaProf.findByPk(id);
    if (!areaprof) {
        return null
    }
    await areaprof.destroy();
    return true;
};