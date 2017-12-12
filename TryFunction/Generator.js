
console.log(`\n------ Test normal generator functions ------\n`);

let normalGen = {

  a: function* () {
    let index = 0;
    while (true)
      yield index++;
  },

  * b() {
    let firstNum = 100;
    yield firstNum;

    let index = 0;
    while (true)
      yield index++;
  }
};

let testNorGenA = normalGen.a();
console.log(testNorGenA.next());
console.log(testNorGenA.next());

let testNorGenB = normalGen.b();
console.log(testNorGenB.next());
console.log(testNorGenB.next());
console.log(testNorGenB.next());


console.log(`\n------ Test async generator functions ------\n`);

let asyncGen = {

  // a: async function* () {
  //   yield 1;
  // },

  * b(value) {

    console.log(value);

    yield 1;

    let tempValue = yield;
    console.log(tempValue);

    let newValue = 99;
    yield newValue;

    tempValue += "1";
    yield tempValue;
  }
};

// let testAsyncGenA = asyncGen.a();
// console.log(testAsyncGenA.next());
// console.log(testAsyncGenA.next());

let testAsyncGenB = asyncGen.b("Foo");
console.log(testAsyncGenB.next());
testAsyncGenB.next('9');
console.log(testAsyncGenB.next());


let secondTestAsyncGenB = asyncGen.b("Bar");
console.log(testAsyncGenB.next());
console.log(testAsyncGenB.next());


console.log(`\n------ Test nested generator functions ------\n`);

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20


console.log(`\n------ Passing arguments into Generators ------\n`);

function* logGenerator() {
  console.log(0);
  let pretzel = yield;
  console.log(1, pretzel);
  console.log(2, yield);
  console.log(3, yield);
}

var gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next();             // 0
gen.next('pretzel');    // 1 pretzel
gen.next('california'); // 2 california
gen.next('mayonnaise'); // 3 mayonnaise
