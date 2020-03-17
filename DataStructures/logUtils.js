const util = require('util');

const inspectObject = (object) => {
    console.log(util.inspect(object, {showHidden: false, depth: null}));
}

exports.inspectObject = inspectObject;
