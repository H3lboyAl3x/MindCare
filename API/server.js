import express from "express";
import dotenv from "dotenv";
import sequelize from "./app/config/db.js";
import Routes from "./app/routes/Routes.js";
import { errorHandler } from "./app/middlewares/errorHandler.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Rotas da API
app.use("/MindCare/API", Routes);

// Middleware de erro
app.use(errorHandler);

// Conectar ao banco e iniciar servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Banco conectado com sucesso!");
    server.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error("Falha ao conectar com o banco de dados:", error);
  }
})();