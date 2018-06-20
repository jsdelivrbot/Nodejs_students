'use strict';

const fs = require('fs');

var ws1 = fs.createWriteStream('output.txt', 'utf-8');
ws1.write('使用Stream写入文本...\n');
ws1.write('END');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(Buffer.from('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(Buffer.from('END', 'utf-8'));
ws2.end();