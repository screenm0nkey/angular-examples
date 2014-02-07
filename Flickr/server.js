#!/usr/bin/env node

"use strict";

var express     = require('express'),
    fs          = require('fs'),
    staticDir   = express['static'],
    path        = require('path');

var staticDirs = ['lib','css', 'js', 'lib', 'partials', 'styles'],
    expApp = express();

expApp.configure(function () {
  staticDirs.forEach(function (item) {
    expApp.use('/'+item, staticDir('app/'+item));
  });
  expApp.use(express.bodyParser());
});


expApp.get("/", function(req, res) {
  fs.createReadStream('app/index.html').pipe(res);
});

console.log('Listening on Port 1970');
expApp.listen(1970);