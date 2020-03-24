const util = require("util");

const inspectObject = (object) => {
    console.log(util
        .inspect(object, {
            depth: null,
            showHidden: false,
            colors: true}
        ));
}

exports.inspectObject = inspectObject;
