import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Usuario from "./Usuario.js"

const Profissionais = sequelize.define('profissionais', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tempoexperiencia: {
        type: DataTypes.INTEGER,
        allowNull: false
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

export default Profissionais;