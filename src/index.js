// Bibliotecas:
import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import path from 'path';

import 'dotenv/config';

// Módulos:
import connectDB from './database/db.js';


// Criar app
const app = express();

app.use(express.json());
app.use(cors());
app.use(router)

// Conectar ao banco de dados:
connectDB();

// Iniciar servidor
const port = process.env.PORT || 8080;

try {
    app.listen(port, () => {
        console.log(`#> Servidor rodando na porta: ${port}`);
    });
} catch (err) {
    console.error("#> Erro ao iniciar servidor: " + err)
}