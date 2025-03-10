import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Profissionais from "./Profissionais.js";
import Semanas from "./Semanas.js"

const SemanasProf = sequelize.define('semanasprof', {
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
    idsema: {
        type: DataTypes.INTEGER,
        references: {
            model: Semanas,
            key: 'id'
        },
        allowNull: false
    }
});

export default SemanasProf;