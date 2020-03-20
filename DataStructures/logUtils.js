const util = require('util');

/**
 * @description Prints a full object in screen.
 *
 * @param object - can be any instance
 */
const inspectObject = (object) => {
    console.log(util.inspect(object,
        {showHidden: false, depth: null, colors: true}));
}

exports.inspectObject = inspectObject;
