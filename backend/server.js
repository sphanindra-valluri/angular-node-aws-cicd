
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        message: 'Node.js backend is running'
    });
});

app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'Phanindra' },
        { id: 2, name: 'John' }
    ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
