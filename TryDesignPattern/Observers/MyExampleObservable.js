
let EventEmitter = require('events');

class ExampleObservable extends EventEmitter {
  hello(name) {
    this.emit('HelloEvent', name);
  }
}
/*
  // Old way: User node util before class feature appears

var util = require('util');

function MyExampleObservable() {
  EventEmitter.call(this);
}

util.inherits(MyExampleObservable, EventEmitter);

MyExampleObservable.prototype.hello = function (name) {
  this.emit('HelloEvent', name);
};
*/

module.exports = ExampleObservable;
