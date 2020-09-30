const { createServer } = require('http');
const { readFile } = require('fs');
const { extname } = require('path');

/**
 * Serves directory at HTTP.
 * @param {string} dir Absolute Path of Directory
 * @param {number} [port] HTTP Port
 */
const serve = (dir, port = null) => {
  dir = dir.replace(/\/$/, '');
  port = typeof port == 'number' ? port : 1123;

  createServer(({ url }, response) => {
    const filePath = dir + (url == '/' ? '/index.html' : url);
    const fileExt = String(extname(filePath)).toLowerCase().replace('.', '');

    const mimeType = {
      html: 'text/html',
      js: 'text/javascript',
      css: 'text/css',
      json: 'application/json',
      png: 'image/png',
      jpg: 'image/jpg',
      gif: 'image/gif',
      svg: 'image/svg+xml',
    };

    const contentType = mimeType[fileExt];

    readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          response.writeHead(404);
          response.end();
        } else {
          response.writeHead(500);
          response.end();
        }
      } else {
        response.writeHead(200, { 'Content-Type': contentType });
        response.end(content, 'utf-8');
      }
    });
  }).listen(port);
};

module.exports = serve;
