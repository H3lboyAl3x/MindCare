import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Profissionais from "./Profissionais.js";
import Horarios from "./Horarios.js";

const HorarioProf = sequelize.define('horarioprof', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idprof: {
        type: DataTypes.INTEGER,
        references: {
            model: Profissionais,
            key: 'id'
        },
        allowNull: false
    },
    idhora: {
        type: DataTypes.INTEGER,
        references: {
            model: Horarios,
            key: 'id'
        },
        allowNull: false
    }
});

export default HorarioProf;