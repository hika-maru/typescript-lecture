import { Counter } from "./counter";

const testCounter = new Counter(10);
const testtestCounter = new Counter(10);

console.log(testCounter.getValue()); // 10
console.log(testtestCounter.getValue()); // 10

testCounter.increment();

console.log(testCounter.getValue()); // 11
console.log(testtestCounter.getValue()); // 10

testCounter.decrement();

console.log(testCounter.getValue()); // 10

testCounter.reset();

console.log(testCounter.getValue()); // 0
