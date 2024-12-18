import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Semanas = sequelize.define('semanas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    semana: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Semanas;