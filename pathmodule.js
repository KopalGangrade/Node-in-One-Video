const path = require('node:path'); 

const a=path.basename('C:\\temp\\myfile.html');
const b=path.dirname('C:\\temp\\myfile.html');
// Returns: 'myfile.html'
console.log(a);
console.log(b);

const c=path.extname(__filename)
console.log(__filename,c);