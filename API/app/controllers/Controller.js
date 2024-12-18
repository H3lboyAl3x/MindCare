import { json } from "sequelize";
import * as Services from "../services/Services.js";

//PARA O USUARIO_______________________________________________
export const getAllUsuario = async (req, res) => {
    try {
        const users = await Services.getAllUsuario();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createUsuario = async (req, res) => {
    try {
        const newUser = await Services.createUsuario(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const user = await Services.getUsuarioById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario nao encontrado de id:' + req.params.id });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const uptadeUsuario = async (req, res) => {
    try {
        const updateUser = await Services.uptadeUsuario(req.params.id, req.body);
        if (!updateUser) {
            return res.status(404).json({ message: 'Usuario nao encontrado' });
        }
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const deleted = await Services.deleteUsuario(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Usuario nao encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA O PACIENTE______________________________________________
export const getAllPacientes = async (req, res) => {
    try {
        const pacientes = await Services.getAllPacientes();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPaciente = async (req, res) => {
    try {
        const newPaciente = await Services.createPaciente(req.body);
        res.status(201).json(newPaciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPacienteById = async (req, res) => {
    try {
        const paciente = await Services.getPacienteById(req.params.id);
        if (!paciente) {
            return res.status(404).json({ message: 'Paciente nao encontrado de id:' + req.params.id });
        }
        res.status(200).json(paciente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePaciente = async (req, res) => {
    try {
        const updatePaciente = await Services.updatePaciente(req.params.id, req.body);
        if (!updatePaciente) {
            return res.status(404).json({ message: 'Paciente nao encontrado' });
        }
        res.status(200).json(updatePaciente);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePaciente = async (req, res) => {
    try {
        const deleted = await Services.deletePaciente(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Paciente nao encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA O PROFISSIONAL__________________________________________
export const getAllProfissionais = async (req, res) => {
    try {
        const profissionais = await Services.getAllProfissionais();
        res.status(200).json(profissionais);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProfissional = async (req, res) => {
    try {
        const newProfissional = await Services.createProfissional(req.body);
        res.status(201).json(newProfissional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getProfissionalById = async (req, res) => {
    try {
        const profissional = await Services.getProfissionalById(req.params.id);
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional nao encontrado de id:' + req.params.id });
        }
        res.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProfissional = async (req, res) => {
    try {
        const updateProfissional = await Services.updateProfissional(req.params.id, req.body);
        if (!updateProfissional) {
            return res.status(404).json({ message: 'Profissional nao encontrado' });
        }
        res.status(200).json(updateProfissional);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProfissional = async (req, res) => {
    try {
        const deleted = await Services.deleteProfissional(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Profissional nao encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA A EXPERIENCIA___________________________________________
export const getAllExperiencias = async (req, res) => {
    try {
        const experiencias = await Services.getAllExperiencias();
        res.status(200).json(experiencias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createExperiencia = async (req, res) => {
    try {
        const newExperiencia = await Services.createExperiencia(req.body);
        res.status(201).json(newExperiencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getExperienciaById = async (req, res) => {
    try {
        const experiencia = await Services.getExperienciaById(req.params.id);
        if (!experiencia) {
            return res.status(404).json({ message: 'Experiencia nao encontrada de id:' + req.params.id });
        }
        res.status(200).json(experiencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateExperiencia = async (req, res) => {
    try {
        const updateExperiencia = await Services.updateExperiencia(req.params.id, req.body);
        if (!updateExperiencia) {
            return res.status(404).json({ message: 'Experiencia nao encontrada' });
        }
        res.status(200).json(updateExperiencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteExperiencia = async (req, res) => {
    try {
        const deleted = await Services.deleteExperiencia(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Experiencia nao encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA O HORARIO_______________________________________________
export const getAllHorarios = async (req, res) => {
    try {
        const horarios = await Services.getAllHorarios();
        res.status(200).json(horarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createHorario = async (req, res) => {
    try {
        const newHorario = await Services.createHorario(req.body);
        res.status(201).json(newHorario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getHorarioById = async (req, res) => {
    try {
        const horario = await Services.getHorarioById(req.params.id);
        if (!horario) {
            return res.status(404).json({ message: 'Horario nao encontrado de id:' + req.params.id });
        }
        res.status(200).json(horario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateHorario = async (req, res) => {
    try {
        const updateHorario = await Services.updateHorario(req.params.id, req.body);
        if (!updateHorario) {
            return res.status(404).json({ message: 'Horario nao encontrado' });
        }
        res.status(200).json(updateHorario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteHorario = async (req, res) => {
    try {
        const deleted = await Services.deleteHorario(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Horario nao encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA A SEMANA________________________________________________
export const getAllSemanas = async (req, res) => {
    try {
        const semanas = await Services.getAllSemanas();
        res.status(200).json(semanas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createSemana = async (req, res) => {
    try {
        const newSemana = await Services.createSemana(req.body);
        res.status(201).json(newSemana);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getSemanaById = async (req, res) => {
    try {
        const semana = await Services.getSemanaById(req.params.id);
        if (!semana) {
            return res.status(404).json({ message: 'Semana nao encontrada de id:' + req.params.id });
        }
        res.status(200).json(semana);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateSemana = async (req, res) => {
    try {
        const updateSemana = await Services.updateSemana(req.params.id, req.body);
        if (!updateSemana) {
            return res.status(404).json({ message: 'Semana nao encontrada' });
        }
        res.status(200).json(updateSemana);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteSemana = async (req, res) => {
    try {
        const deleted = await Services.deleteSemana(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Semana nao encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA A CONSULTA______________________________________________
export const getAllConsultas = async (req, res) => {
    try {
        const consultas = await Services.getAllConsultas();
        res.status(200).json(consultas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createConsulta = async (req, res) => {
    try {
        const newConsulta = await Services.createConsulta(req.body);
        res.status(201).json(newConsulta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getConsultaById = async (req, res) => {
    try {
        const consulta = await Services.getConsultaById(req.params.id);
        if (!consulta) {
            return res.status(404).json({ message: 'Consulta nao encontrada de id:' + req.params.id });
        }
        res.status(200).json(consulta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateConsulta = async (req, res) => {
    try {
        const updateConsulta = await Services.updateConsulta(req.params.id, req.body);
        if (!updateConsulta) {
            return res.status(404).json({ message: 'Consulta nao encontrada' });
        }
        res.status(200).json(updateConsulta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteConsulta = async (req, res) => {
    try {
        const deleted = await Services.deleteConsulta(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Consulta nao encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA O CHAT__________________________________________________
export const getAllChats = async (req, res) => {
    try {
        const chats = await Services.getAllChats();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createChat = async (req, res) => {
    try {
        const newChat = await Services.createChat(req.body);
        res.status(201).json(newChat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getChatById = async (req, res) => {
    try {
        const chat = await Services.getChatById(req.params.id);
        if (!chat) {
            return res.status(404).json({ message: 'Chat nao encontrado de id:' + req.params.id });
        }
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateChat = async (req, res) => {
    try {
        const updateChat = await Services.updateChat(req.params.id, req.body);
        if (!updateChat) {
            return res.status(404).json({ message: 'Chat nao encontrado' });
        }
        res.status(200).json(updateChat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteChat = async (req, res) => {
    try {
        const deleted = await Services.deleteChat(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Chat nao encontrado' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//PARA A MENSAGEM______________________________________________
export const getAllMensagens = async (req, res) => {
    try {
        const mensagens = await Services.getAllMensagens();
        res.status(200).json(mensagens);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createMensagem = async (req, res) => {
    try {
        const newMensagem = await Services.createMensagem(req.body);
        res.status(201).json(newMensagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getMensagemById = async (req, res) => {
    try {
        const mensagem = await Services.getMensagemById(req.params.id);
        if (!mensagem) {
            return res.status(404).json({ message: 'Mensagem nao encontrada de id:' + req.params.id });
        }
        res.status(200).json(mensagem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateMensagem = async (req, res) => {
    try {
        const updateMensagem = await Services.updateMensagem(req.params.id, req.body);
        if (!updateMensagem) {
            return res.status(404).json({ message: 'Mensagem nao encontrada' });
        }
        res.status(200).json(updateMensagem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteMensagem = async (req, res) => {
    try {
        const deleted = await Services.deleteMensagem(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: 'Mensagem nao encontrada' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
