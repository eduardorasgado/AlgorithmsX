const fs = require('fs');

exports.dataReader = (documentName) => {
    let content = fs.readFileSync(
        `./array-manipulation-long-test-data/${documentName}`, 'utf-8');

    let queries = []
    let lines = content.split("\r");
    let line;
    let lastLine;
    // reading every line in file
    for(line of lines) {
        line = line.split(' ');
        // adding if complete data within line array
        if(line.length >=3)
            queries.push([parseInt(line[0]), parseInt(line[1]), parseInt(line[2])]);
    }

    return queries;
}
