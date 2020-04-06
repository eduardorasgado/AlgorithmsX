const { Graph } = require("./list-based-graph");

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g);
console.log(g.dephFirstSearchRecursive("A"));
console.log(g.dephFirstSearchRecursive(""));
console.log(g.dephFirstSearchIterative("A"));
