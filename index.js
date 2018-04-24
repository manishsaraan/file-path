'use strict';
const config = require('./package.json');
const path = require('path');
var fs = require('fs');

module.exports = (key, fileName) => {
	const { filepath } = config;
	const basePath = filepath[key];
	const fullPath = path.join(basePath + fileName + '.js');

	if (fs.existsSync(fullPath)) {
		return require('./'+fullPath);
    }
    else{
    	throw new Error('File not found.');
    }
};
