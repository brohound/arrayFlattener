var arrayFlattener = require('./arrayFlattener.js');
var _ = require('underscore');

var invalidInputReturnCode = 100;

//The test suits
 var testSuit = [
    //Happy cases
    //Testing for valid inputs
    [1],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [[[1]]],
    [1,[2],[3, [4, 5]],[[[[[6, 7, [8, 9, [10, [11]]]]]]]]],
    [1,[2,[4,[5,[6]]]]],
    [[[[[[[[[[[[[[1],[2]]]]]]]]]]]]],[3],[[[[[[4]]]]]],[[[[5]]]],[6,[7],[[[[8]]]]],[9], 10],

    //Negative cases
    //Testing for non array inputs
    1,
    null,
    //Testing for presence of empty array
    [],
    [[],[],[]]
    [[[[],[],[]]]],
    [[[[[[[[[[]]]]]]]]]],
    [[[[[[[[[[[1,[]]]]]]]]]]]]
    [1, [2, 3], [4, []]],

    //Testing for non-integer inputs and null inputs
    ['abcd'],
    [null],
    [1.2, 2.3]
    [1, 2, 3, 4, null],
    [1, 2, 4, 5, [null, 6, [7, [9, null]]]],
    [['abcd'],'e', ['f'], [['ghi', ['j']]]]
    [1.2,2.3,4.5,[]],
    //Testing for a combination of integers, null values and float values
    [[[1, 2, 3 [[[[[[]]], 4.5]], [6, 7, 8]]]],[[[[]]]]]
];

var testCaseCounter = 0;
_.each(testSuit,
    function(testCase) {
        var testCaseReturnValue = arrayFlattener(testCase);
        if (testCaseReturnValue === invalidInputReturnCode) {
            console.log('The test case ' + testCaseCounter + ' failed');
        }
        else {
            console.log('The test case ' + testCaseCounter + ' passed');
            console.log(testCaseReturnValue);
        }
        testCaseCounter++;

    }
);