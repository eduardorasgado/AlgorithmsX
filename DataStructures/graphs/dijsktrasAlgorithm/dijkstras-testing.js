const { Graph } = require('./graph');

let g = new Graph();

["A", "B", "C", "D", "E", "F"]
    .forEach(letter => g.addVertex(letter));

console.log(g);
