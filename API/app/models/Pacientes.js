import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../config/db.js";
import Usuarios from "./Usuarios.js";

const Pacientes = sequelize.define('pacientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuarios,
            key: 'id'
        },
        allowNull: false
    }
});

export default Pacientes;