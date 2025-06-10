const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the To-Do List API! Use /todos endpoint.');
});

app.use((req, res, next) => {
    res.status(404).json({ message: 'API Endpoint Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({ message: 'Something went wrong on the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('To-Do API Endpoints:');
    console.log('  GET    /todos');
    console.log('  POST   /todos (body: { "task": "..." })');
    console.log('  PUT    /todos/:id (body: { "task": "...", "completed": true/false })');
    console.log('  DELETE /todos/:id');
});
