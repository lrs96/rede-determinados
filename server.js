const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(express.static('public'));
app.set('view engine', 'ejs');

const routers = require('./routes/routes')

const PORT = 3030;

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Aperte CTRL + C para derrubar o servidor`)
})