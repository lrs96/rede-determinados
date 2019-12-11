const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT = 3030;

let router = express.Router()


app.use(bodyParser.urlencoded({
    extended: true,
}))

app.use(express.static('public'));
app.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render("index.ejs")
});

app.use('/api', router)



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Aperte CTRL + C para derrubar o servidor`)
})