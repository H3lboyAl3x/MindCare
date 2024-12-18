import Usuario from "../models/Usuario";
import Pacientes from "../models/Pacientes";
import Profissionais from "../models/Profissionais";
import Experiencias from "../models/Experiencias";
import Horarios from "../models/Horarios";
import Semanas from "../models/Semanas";
import Consultas from "../models/Consultas";
import Chat from "../models/Chat";
import Mensagem from "../models/Mensagem";
 
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

//PARA O PACIENTE______________________________________________

//PARA O PROFISSIONAL__________________________________________

//PARA A EXPERIENCIA___________________________________________

//PARA O HORARIO_______________________________________________

//PARA A SEMANA________________________________________________

//PARA A CONSULTA______________________________________________

//PARA O CHAT__________________________________________________

//PARA A MENSAGEM______________________________________________