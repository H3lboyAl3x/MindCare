import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Experiencias = sequelize.define('experiencias', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    experiencia: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Experiencias;