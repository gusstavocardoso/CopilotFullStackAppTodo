const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todoapp';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado:', MONGO_URI))
  .catch(err => console.error('Erro ao conectar MongoDB:', err));

// Rotas principais
app.use('/todos', todoRoutes);

// Rota de reset (somente para testes)
if (process.env.NODE_ENV !== 'production') {
  const testRoutes = require('./routes/testRoutes');
  app.use('/test', testRoutes);
}

// Inicialização do servidor
app.listen(4000, () => {
  console.log('Backend rodando na porta 4000');
});
