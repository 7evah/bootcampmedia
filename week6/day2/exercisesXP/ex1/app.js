const express = require('express');
const app = express();
const PORT = 3000;

const mainRouter = require('./routes/index'); 
app.use('/', mainRouter);


app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found</h1><p>The requested URL was not found on this server.</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Test routes:');
    console.log(`- http://localhost:${PORT}/`);
    console.log(`- http://localhost:${PORT}/about`);
});