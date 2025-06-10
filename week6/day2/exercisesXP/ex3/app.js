const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Book Management API! Use /books endpoint for CRUD operations.');
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
    console.log('Book Management API Endpoints:');
    console.log('  GET    /books');
    console.log('  POST   /books (body: { "title": "...", "author": "...", "publishedYear": ... })');
    console.log('  PUT    /books/:id (body: { "title": "...", "author": "...", "publishedYear": ... })');
    console.log('  DELETE /books/:id');
});