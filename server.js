const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index.ejs")
});

const PORT = 3030;

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Aperte CTRL + C para derrubar o servidor`)
})