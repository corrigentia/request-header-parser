var express = require('express');
var router = express.Router();

// var UA = require('express-useragent').os;
var useragent = require('useragent');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Append '(/)api/whoami/' to the end of the address to get the API endpoint.");
});

router.get('/api/whoami/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    'use strict';
    var ipaddress = req.ip;
    var language = req.acceptsLanguages()[0];
    // var software = req.get('User-Agent');
    var software = useragent.parse(req.headers['user-agent']).os.family;

    // example for parsing both the useragent header and a optional js useragent
    var agent2 = useragent.parse(req.headers['user-agent'], req.query.jsuseragent).os.family;
    var ip2 = req.socket.remoteConnection;
    var ip = req.headers['x-forwarded-tor'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress.split(',')[0];
    var host = req.hostname;
    // var language = req.headers['accept-language'];
    var userAgent = req.headers['user-agent'];
    res.json({
        ipaddress: ipaddress,
        language: language,
        software: software
        //UA: UA//,
        // ip2: ip2,
        // ip: ip,
        // host: host,
        // userAgent: userAgent
    });
});

module.exports = router;
