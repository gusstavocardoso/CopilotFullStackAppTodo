const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose.connect('mongodb://localhost:27017/todoapp')
  .then(() => console.log('MongoDB conectado'))
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
