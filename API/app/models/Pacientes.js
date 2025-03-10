import { DataTypes, INTEGER } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js";

const Pacientes = sequelize.define('pacientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    iduser: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        },
        allowNull: false
    }
});

export default Pacientes;