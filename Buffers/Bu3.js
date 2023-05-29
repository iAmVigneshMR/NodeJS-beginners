const z = require('zlib');
const txt = 'Sample';

const co = z.gzipSync(txt); //used to compress text or file
console.log(co);
const de = z.gunzipSync(co); //used to decompress text or file
console.log(de.toString());