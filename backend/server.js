const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/exercise'
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', ()=> {
    console.log("MongoDB database connection established successfully");
});

const exRouter = require('./routes/excercises');
const userRouter = require('./routes/users');

app.use('/exercises', exRouter);
app.use('/users',userRouter)

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
});