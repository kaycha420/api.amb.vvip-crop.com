'use strict';

const Buffer = require('buffer').Buffer;
const path = require('path');
const fs = require('fs');

function decode_base64(imgdata, path) {
    const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');

    fs.writeFileSync(path, base64Data, { encoding: 'base64' });
}

module.exports.decode_base64 = decode_base64;