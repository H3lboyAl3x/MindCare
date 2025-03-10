import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Profissionais from "./Profissionais.js";
import Experiencias from "./Experiencias.js"

const ExperienciaProf = sequelize.define('experienciaprof', {
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
    idexpe: {
        type: DataTypes.INTEGER,
        references: {
            model: Experiencias,
            key: 'id'
        },
        allowNull: false
    }
});

export default ExperienciaProf;