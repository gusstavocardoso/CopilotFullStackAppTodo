const mongoose = require('mongoose');
const Todo = require('./models/Todo');

mongoose.connect('mongodb://localhost:27017/todoapp');

const seedTodos = [
  { title: 'Estudar React', completed: false },
  { title: 'Configurar Cypress', completed: false },
  { title: 'Criar testes backend', completed: true }
];

async function seed() {
  await Todo.deleteMany({});
  await Todo.insertMany(seedTodos);
  console.log('Banco populado com tarefas iniciais!');
  mongoose.connection.close();
}

seed();
