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

//PARA O PROFISSIONAL__________________________________________

//PARA A EXPERIENCIA___________________________________________

//PARA O HORARIO_______________________________________________

//PARA A SEMANA________________________________________________

//PARA A CONSULTA______________________________________________

//PARA O CHAT__________________________________________________

//PARA A MENSAGEM______________________________________________