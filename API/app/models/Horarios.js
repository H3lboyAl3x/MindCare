import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Horarios = sequelize.define('horarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    horario: {
        type: DataTypes.TIME,
        allowNull: false
    }
});

export default Horarios;