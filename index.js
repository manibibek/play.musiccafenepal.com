const app = require('express')()

app.set("view engine", "ejs")

app.get('/', (req, res) => res.render('index'));

app.get('/join', (req, res) => res.render('join'))

app.get('/create', (req, res) => res.render('create'))

app.get('/dashboard', (req, res)=> res.render('dashboard'))

app.listen('3333', () => console.log('server started at 3333'))


