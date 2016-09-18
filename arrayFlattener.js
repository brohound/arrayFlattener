var self = arrayFlattener;
module.exports = self;

var _ = require('underscore');

// the invalidInputReturnCode is returned by the recursiveArrayFlatterner function for invalid inputs.
var invalidInputErrorCode = 100;

function arrayFlattener (nestedArray) {
    var flattenedArray = [];

    function recursiveArrayFlatterner(nestedArray) {
        if (!_.isArray(nestedArray) || _.isEmpty(nestedArray))
            return invalidInputErrorCode;

        for (var element = 0; element < nestedArray.length; element++) {
            //return invalidInputErrorCode if the element is not an array or an integer.
            if (!_.isArray(nestedArray[element]) && !isInteger(nestedArray[element]))
                return invalidInputErrorCode;
            //push to the flattened array if the element is a number
            else if (isInteger(nestedArray[element]))
                flattenedArray.push(nestedArray[element]);
            //recursively call recursiveArrayFlatterner
            else if (recursiveArrayFlatterner(nestedArray[element]) === invalidInputErrorCode)
                return invalidInputErrorCode;
        }

        return flattenedArray;
    }

    //This is to check for float values.
    function isInteger(number) {
        return _.isNumber(number) && number === parseInt(number, 10);
    }
    return recursiveArrayFlatterner(nestedArray);
}