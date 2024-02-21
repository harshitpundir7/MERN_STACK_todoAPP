import dotenv from 'dotenv';
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');

app.use(cors({origin: process.env.FRONTEND_HOST}));
app.use(express.json());

app.post('/todo', async function(req, res) {
  const parsedPayload = createTodo.safeParse(req.body);
  if(!parsedPayload.success) {
    res.status(411).json({
        message: 'Invalid payload'
    })
    return;
  }
  await todo.create({
    title: req.body.title,
    description: req.body.description,
    completed: false
  })
  res.json({
      message: 'Todo created successfully'
  });
});

app.get('/todos', async function(req, res) {
  const todos = await todo.find({});
  res.json({todos});
});

app.put('/complete', async function(req, res) {
  const parsedPayload = updateTodo.safeParse(req.body);
  if(!parsedPayload.success) {
    res.status(411).json({
        message: 'Invalid payload'
    })
    return;
  }
  await todo.updateOne({
    _id : req.body.id
  },
  {
    completed: true
})
res.json({
    message: 'Todo marked as completed'
});
});

app.listen(process.env.PORT, ()=> {
  console.log('Server started');
})