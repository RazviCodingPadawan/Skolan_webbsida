// ARTUR

const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();

const cors = require('cors');
const routes = require('./routes/CreateApplication')

const app = express();

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.json());
app.use(cors());

app.use(routes);


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));


app.listen(5000, ()=>{
    console.log('Server is running on port 5000!')
});
