const {inspectObject} = require("../../logUtils");
const { Graph } = require('./graph');


let g = new Graph();
let g2 = new Graph();

["A", "B", "C", "D", "E", "F"]
    .forEach(letter => g.addVertex(letter));

["S", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"]
    .forEach(letter => g2.addVertex(letter));

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

let edges2 = [
    ['S', 'A', 7],
    ['S', 'B', 2],
    ['S', 'C', 3],
    ['A', 'B', 3],
    ['A', 'D', 4],
    ['B', 'H', 1],
    ['B', 'C', 12],
    ['C', 'L', 2],
    ['D', 'F', 5],
    ['D', 'H', 4],
    ['H', 'G', 2],
    ['H', 'F', 3],
    ['L', 'I', 4],
    ['L', 'J', 4],
    ['G', 'I', 10],
    //['G', 'E', 2],
    ['I', 'J', 6],
    ['I', 'K', 4],
    ['J', 'K', 4],
    ['K', 'E', 5]
];

edges.forEach(([xVertex, yVertex, weight]) => {
    g.addEdge(xVertex, yVertex, weight);
})

edges2.forEach(([xVertex, yVertex, weight]) => {
    g2.addEdge(xVertex, yVertex, weight);
})

//inspectObject(g);
inspectObject(g2);

console.log("---getting the shortest path...---");
//console.log(g.getShortestPath("A", "E"));
console.log("FROM S TO E: ",
    g2.getShortestPath("S", "E"), "\n");
console.log("FROM I TO S: ",
    g2.getShortestPath("I", "S"));

console.log("---getting the shortest path[VARIANT IMPLEMENTATION]...---");
console.log("FROM S TO E: ",
    g2.shortestPathDijkstras("S", "E"), "\n");
console.log("FROM I TO S: ",
    g2.shortestPathDijkstras("I", "S"));
