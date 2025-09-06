// const express = require('express');
// const aiRoutes = require('./routes/ai.routes');
// const cors = require('cors');

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.use('/ai', aiRoutes);

// module.exports = app;
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: "*",   
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/ai', aiRoutes);

module.exports = app;
