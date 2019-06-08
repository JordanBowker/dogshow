var fs = require('fs-extra');
var path = require('path');

fs.copySync(path.resolve(__dirname,'./src/404.html'), './docs/404.html');