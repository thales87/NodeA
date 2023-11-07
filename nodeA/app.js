const consign = require('consign');
var express = require('express');

const app = express();
consign()
	.then("libs/middlewares.js")
	.then("routes")
	.then("libs/boot.js")
	.into(app);

