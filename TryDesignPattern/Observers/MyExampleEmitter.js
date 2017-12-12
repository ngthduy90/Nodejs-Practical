let ExampleObservable = require('./MyExampleObservable');
let observable = new ExampleObservable();

let callCount = 0;

observable.on('HelloEvent', (name) => {
  callCount++;
  console.log(`Call count: ${callCount} times.`);
  
  console.log(`Hello ${name}!`);
});

observable.hello("Duy");

module.exports = observable;
