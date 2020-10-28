const url = require('url');
const express = require('express')
const path = require('path')
const session = require('express-session')
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

// 404 Error Handling
router.all('*', (req, res) => {
    fs.readFile('errors/404.html', (err, data) => {
        //console.log(`${req.url} is not found!`)
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
})

module.exports = router