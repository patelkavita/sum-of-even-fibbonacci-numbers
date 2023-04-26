const assertions = require('../lib/assertions.js');
const utils = require('../lib/utils.js');
const demo = require('../src/fibbonacci-series.js');

const assert = assertions.assert;
const printHeadLine = utils.printHeadLine;
const add = demo.add;

const testAdd = function() {
  printHeadLine("\nTesting for add function");
  assert(0, add(0,0), "should be 0 for input 0,0");
  assert(2, add(1,1), "should be 2 for input 1,1");
  assert(4, add(2,2), "should be 4 for input 2,2");

}

testAdd();
assertions.getSummary();
