const express = require ('express');
const app = express()
const path = require ('path');

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, function() { console.log('Servidor funcionando'); }) 

app.get('/', (req, res)=> {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
}); 

app.get('/register', (req, res)=> {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
}); 

app.get('/login', (req, res)=> {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
}); 