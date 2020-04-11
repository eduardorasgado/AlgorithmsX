const { Graph } = require('./graph');

let g = new Graph();

["A", "B", "C", "D", "E", "F"]
    .forEach(letter => g.addVertex(letter));

let edges = [
    ["A", "B", 4],
    ["B", "E", 3],
    ["E", "D", 3],
    ["D", "C", 2],
    ["A", "D", 2],
    ["C", "A", 2],
    ["C", "F", 4],
    ["F", "D", 1],
    ["F", "E", 1]
];
console.log(g);
