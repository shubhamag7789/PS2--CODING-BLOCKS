const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const hbs = require('hbs');
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
app.set('view engine','hbs')
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(path.join(__dirname,'views','partials'));

const routeHandler = require('./routes/blogs-route');
app.use('/',routeHandler);

// Using local database
// mongoose.connect('mongodb://127.0.0.1:27017/myBlogs')

// using atlas server 
mongoose.connect('mongodb+srv://shubhamagarwal47910:ShubhamMSD77@cluster0.nthjp0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`Server started at http://localhost:${PORT}`);
        })
    })
    .catch((err)=>{
        console.log(`Could not connect to mongoose: ${err}`);
    })