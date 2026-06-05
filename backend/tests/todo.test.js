const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const todoRoutes = require('../routes/todoRoutes');

const app = express();
app.use(express.json());
app.use('/todos', todoRoutes);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/todoapp_test');
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('Todo API', () => {
  it('cria uma nova tarefa', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ title: 'Teste tarefa', completed: false });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Teste tarefa');
  });

  it('lista tarefas', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
