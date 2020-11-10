const express = require('express');
const compression = require('compression');
const app = express();
const packageName = require('./package.json').name;
const fs = require('fs')

app.use(compression({ filter: shouldCompress }))
 
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
  // fallback to standard filter function
  return compression.filter(req, res)
}

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
                ['https://', req.get('Host'), req.url].join('')
            );
        }
        next();
    }
}

app.use(forceSSL());

app.use(express.static(`${__dirname}/dist/${packageName}`));
app.use('/.well-known/brave-rewards-verification.txt', express.static(`${__dirname}/.well-known/brave-rewards-verification.txt`));

app.get('/.well-known/brave-rewards-verification.txt', function(req, res) {
    res.sendFile('brave-rewards-verification.txt', {root: `.well-known`});
});

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: `dist/${packageName}/`});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
