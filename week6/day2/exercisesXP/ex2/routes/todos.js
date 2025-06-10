const express = require('express');
const router = express.Router();
let todos = [
    { id: 1, task: 'Learn Express.js', completed: false },
    { id: 2, task: 'Build a REST API', completed: false }
];

let nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

router.get('/', (req,res) => {
    res.json(todos);
})

router.post('/', (req,res) =>{
    console.log('POST todos requested', req.body);
     const { task } = req.body;

    if (!task || typeof task !== 'string' || task.trim() === '') {
        return res.status(400).json({ message: 'Task is required and must be a non-empty string.' });
    }

    const newTask = {
        id: nextId,
        task: task.trim(),
        completed: false
    };
    todos.push(newTask);
    res.status(201).json(newTask);
});


router.put('/:id', (req, res) => {
    console.log(`PUT /todos/${req.params.id} requested`, req.body);
    const id = parseInt(req.params.id);
    const { task, completed } = req.body;
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ message: 'To-do item not found.' });
    }
    if (task !== undefined && (typeof task !== 'string' || task.trim() === '')) {
        return res.status(400).json({ message: 'Task must be a non-empty string if provided.' });
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Completed must be a boolean.' });
    }
    if (task !== undefined) {
        todos[todoIndex].task = task.trim();
    }
    if (completed !== undefined) {
        todos[todoIndex].completed = completed;
    }
    res.json(todos[todoIndex]); 
});

router.delete('/:id', (req, res) => {
    console.log(`DELETE /todos/${req.params.id} requested`);
    const id = parseInt(req.params.id);
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);

    if (todos.length < initialLength) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'To-do item not found.' });
    }
});

module.exports = router;