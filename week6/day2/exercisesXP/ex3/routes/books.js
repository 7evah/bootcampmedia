const express = require('express');
const router = express.Router(); 

const books = [
    { id: 1, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', publishedYear: 1979 },
    { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 },
];

let nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

router.get('/', (req, res) => {
    console.log('GET /books requested');
    res.json(books);
});

router.post('/', (req, res) => {
    console.log('POST /books requested', req.body);
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ message: 'Title, author, and publishedYear are all required.' });
    }
    if (typeof publishedYear !== 'number' || publishedYear < 1000 || publishedYear > new Date().getFullYear()) {
        return res.status(400).json({ message: 'Published year must be a valid year.' });
    }

    const newBook = {
        id: nextId++,
        title: title.trim(),
        author: author.trim(),
        publishedYear: publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook); 
});

router.get('/:id', (req, res) => {
    console.log(`GET /books/${req.params.id} requested`);
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).json({ message: 'Book not found.' });
    }
});

router.put('/:id', (req, res) => {
    console.log(`PUT /books/${req.params.id} requested`, req.body);
    const id = parseInt(req.params.id);
    const { title, author, publishedYear } = req.body;

    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found.' });
    }

    if (title !== undefined && (typeof title !== 'string' || title.trim() === '')) {
        return res.status(400).json({ message: 'Title must be a non-empty string if provided.' });
    }
    if (author !== undefined && (typeof author !== 'string' || author.trim() === '')) {
        return res.status(400).json({ message: 'Author must be a non-empty string if provided.' });
    }
    if (publishedYear !== undefined && (typeof publishedYear !== 'number' || publishedYear < 1000 || publishedYear > new Date().getFullYear())) {
        return res.status(400).json({ message: 'Published year must be a valid year if provided.' });
    }

    if (title !== undefined) books[bookIndex].title = title.trim();
    if (author !== undefined) books[bookIndex].author = author.trim();
    if (publishedYear !== undefined) books[bookIndex].publishedYear = publishedYear;

    res.json(books[bookIndex]);
});

router.delete('/:id', (req, res) => {
    console.log(`DELETE /books/${req.params.id} requested`);
    const id = parseInt(req.params.id);

    const initialLength = books.length;
    books = books.filter(b => b.id !== id);

    if (books.length < initialLength) {
        res.status(204).send(); 
    } else {
        res.status(404).json({ message: 'Book not found.' });
    }
});

module.exports = router;