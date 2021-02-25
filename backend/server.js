const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/exercise'
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

//step 3: promise        
const db = mongoose.connection;
db.once('open', ()=> {
    console.log("MongoDB database connection established successfully")
});

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
});