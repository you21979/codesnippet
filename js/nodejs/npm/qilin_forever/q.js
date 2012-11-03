#!/usr/bin/node --expose_gc

/**
 *  起動モジュール
 */
"use strict";
var Qilin = require('qilin');
var qilin = new Qilin(
    {
        exec: __dirname + '/app.js'
      , args: []
      , silent: false
    }
  , {
        workers: 3
    }
);
qilin.start(function() {
  console.log('Qilin is started!');
});
