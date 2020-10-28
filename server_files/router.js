const url = require('url');
const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
var router = express.Router()

router.use(express.static(path.join(__dirname, 'public')))

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.all('/', async (req, res) => {
    res.render('ejs/index');
    res.end();
})

router.all('/myip', async (req, res) => {
    var myip = req.ip || null;
    res.status(200).send(`<h1>Your ip address is: ${myip.toString()}</h1>`);
    res.end();
})

// 404 Error Handling
router.all('*', (req, res) => {
    res.status(404).render('offline/404');
    res.end();
})

module.exports = router