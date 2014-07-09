#!/usr/bin/env node

"use strict";

var express = require('express');
var http = require('http');
var path = require('path');
var _ = require('underscore');
var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 1970);
  app.use(express.logger('dev'));
  // app.use(express.favicon());
  // app.use(express.json());
  // app.use(express.urlencoded());
  // app.use(express.methodOverride());
  // app.use(app.router);
  app.use(express.bodyParser({
    keepExtensions: true,
    uploadDir: __dirname + '/files',
    limit: '100mb'
  }));

  // these two lines allow access to the lib folder
  app.use(express.static(path.join(__dirname, 'app')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get("/", function(req, res) {
  res.sendfile(path.join(__dirname, 'app/index.html'));
});


app.post('/upload', function(req, res) {
  var files = req.files.myFile;
  if (_.isArray(files)) {
    files = _.map(files, function(file) {
      return {
        name: file.name,
        size: file.size
      };
    });
  } else {
    files = [{
      name: files.name,
      size: files.size
    }];
  }
  // console.log(files);
  res.json(200, {
    requestHeaders : req.headers,
    result: files
  });
  // res.send(200, files);
  res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

