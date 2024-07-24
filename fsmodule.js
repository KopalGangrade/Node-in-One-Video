const fs = require('fs');

// fs.readFile('file.txt','utf-8',(err, data)=>{
//     console.log(err,data);
// });
// console.log('Finished reading file.txt');



const a = fs.readFileSync('file.txt')
console.log(a.toString());
console.log('Finished reading file.txt');
