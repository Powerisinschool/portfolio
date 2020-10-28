const http = require('http');
const compression = require('compression');
const express = require('express');
const path = require('path')
const routes = require('./server_files/router')
const PORT = process.env.PORT || 5000
const server  = http.createServer(app);
const appPackage = require('./package.json');
const appVersion = appPackage.version;

console.log(appVersion);

//app.use('/favicon.ico', express.static(__dirname + '/img/hjfh.ico'));
app.use('/', express.static(__dirname + '/static'));
app.use('/', express.static(__dirname + '/service'));
app.use('/', express.static(__dirname + '/pwa'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/icons', express.static(__dirname + '/node_modules/bootstrap-icons/icons')); // Redirect Bootstrap Icons
app.use('/bi', express.static(__dirname + '/node_modules/bootstrap-icons/bootstrap-icons.svg'));
app.use('/js', express.static(__dirname + '/node_modules/vue-popperjs/dist'));

//app.use(compression({ filter: shouldCompress }))

function shouldCompress (req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false;
    }
}

app.set('views', path.join(__dirname, 'pages'))
app.set('view engine', 'ejs')

const app = express();

app.use('/', routes)
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))