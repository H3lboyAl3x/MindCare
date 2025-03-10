import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../config/db.js";
import Profissionais from "./Profissionais.js";
import Pacientes from "./Pacientes.js";

const NumeroP = sequelize.define('numerop', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Profissionais: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissionais,
            key: 'id'
        },
        allowNull: false
    },
    Pacientes: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: 'id'
        },
        allowNull: false
    },
});

export default NumeroP;