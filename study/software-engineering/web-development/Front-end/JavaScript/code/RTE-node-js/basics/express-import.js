var express = require('express');
var app = express();
var square = require('./express-import-square');
console.log('The area of a square with a width of 4 is ' + square.area(4));