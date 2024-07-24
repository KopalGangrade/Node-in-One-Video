const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please  turn off the moter!');
  setTimeout(() =>{
    console.log('Its a reminder Please  turn off the moter!');
  },3000)
 
  
});
console.log('the script is running');
myEmitter.emit('WaterFull');