const http = require('http');
const compression = require('compression');
const express = require('express');
const path = require('path')
const routes = require('./server_files/router')
const PORT = process.env.PORT || 5000
const server  = http.createServer(app);

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