require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const routes = require('./src/router/routes');

const PORT = process.env.PORT || 4000;

require('./config/db.js');

app.use(helmet());
app.use(cors({
    origin: process.env.ENVIRONMENT === 'development' ? 'http://localhost:3000' : 'https://alwan.vercel.app',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', routes);

app.use('*', (req, res) => {
    res.status(404).send('<h2>404 Not Found</h2>');
});

app.listen(PORT, () => {
    console.log(`Server run in http://localhost:${PORT}`);
});