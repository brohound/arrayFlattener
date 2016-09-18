var self = arrayFlattener;
module.exports = self;

var _ = require('underscore');

var flattenedArray = [];
// the invalidInputReturnCode is returned by the arrayFlattener function for invalid inputs.
var invalidInputErrorCode = 100;

function arrayFlattener(nestedArray) {
    if (!_.isArray(nestedArray) || _.isEmpty(nestedArray))
        return invalidInputErrorCode;

    for (var element = 0; element < nestedArray.length; element++) {
        if (_.isArray(nestedArray[element]))
            arrayFlattener(nestedArray[element]);
        else if (_.isNumber(nestedArray[element]))
            flattenedArray.push(nestedArray[element]);
        else
            return invalidInputErrorCode;
    }

    return flattenedArray;
}