const {inspectObject} = require("../../logUtils");
const { Graph } = require('./graph');


let g = new Graph();

["A", "B", "C", "D", "E", "F"]
    .forEach(letter => g.addVertex(letter));

let edges = [
    ["A", "B", 4],
    ["B", "E", 3],
    ["E", "D", 3],
    ["D", "C", 2],
    ["C", "A", 2],
    ["C", "F", 4],
    ["F", "D", 1],
    ["F", "E", 1]
];

edges.forEach(([xVertex, yVertex, weight]) => {
    g.addEdge(xVertex, yVertex, weight);
})

inspectObject(g);

console.log("---getting the shortest path...---");
console.log(g.dijkstrasShortestPath("A", "E"));
