import express from "express";
import dotenv from "dotenv";
import sequelize from "./app/config/db.js";
import Routes from "./app/routes/Routes.js";
import { errorHandler } from './app/middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//rotas
app.use("/MindCare/API", Routes);

//middlewares de erro
app.use(errorHandler);

//conectar ao BD e iniciar server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Banco conectado com sucesso!');
    app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`))
  }
  catch (error) {
    console.error('Falha ao conectar com o bando de dados:', error);
  }
})();