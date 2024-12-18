import { json } from "sequelize";
import * as Services from "../services/Services.js";

//PARA O USUARIO_______________________________________________
export const getAllUsuario = async (req, res) => {
    try {
        const users = await Services.getAllUsuario();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const createUsuario = async (req, res) => {
    try {
        const newUser = await Services.createUsuario(req.body);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
};
export const getUsuarioById = async (req, res) => {
    try {
        const user = await Services.getUsuarioById(req.params.id);
        if (!user)
        {
            return res.status(404).json({ message: 'Usuario nao encontrado de id:' + req.params.id});
        }
        res.status(200).json(user)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
};
export const uptadeUsuario = async (req, res) => {
    try {
        const updateUser = await Services.uptadeUsuario(req.params.id, req.body);
        if (!updateUser)
        {
            return res.status(404).json({ message: 'Usuario nao encontrado'});
        }
        res.status(200).json(updateUser)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
};
export const deleteUsuario = async (req, res) => {
    try {
        const deleted = await Services.deleteUsuario(req.params.id);
        if (!deleted)
        {
            return res.status(404).json({ message: 'Usuario nao encontrado'});
        }
        res.status(204).json()
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
};

//PARA O PACIENTE______________________________________________

//PARA O PROFISSIONAL__________________________________________

//PARA A EXPERIENCIA___________________________________________

//PARA O HORARIO_______________________________________________

//PARA A SEMANA________________________________________________

//PARA A CONSULTA______________________________________________

//PARA O CHAT__________________________________________________

//PARA A MENSAGEM______________________________________________