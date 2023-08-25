const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path')

// setup call hbs with sub folder
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'));

// set serving static file
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// routing
app.get('/index', home)
app.get('/contact', contactMe)
app.get('/form-project', formProject)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})

// index
function home(req, res) {
    res.render('index')
}

// form Project
function formProject(req, res) {
    res.render('form-project')
}

// contact me
function contactMe(req, res) {
    res.render('contact')
}