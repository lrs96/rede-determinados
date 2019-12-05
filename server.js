const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = app.Router()


router.use(bodyParser.urlencoded({
    extended: true,
}))

router.use(express.static('public'));
router.set('view engine', 'ejs');

router.get('/', (req, res) => {
    res.render("index.ejs")
});

const PORT = 3030;

router.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Aperte CTRL + C para derrubar o servidor`)
})