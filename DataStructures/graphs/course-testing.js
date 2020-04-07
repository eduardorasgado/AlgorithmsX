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
console.log("====== DEPH FIRST SEARCH =====");
console.log("----recursively----");
console.log(g.depthFirstSearchRecursive("A"));
console.log(g.depthFirstSearchRecursive("E"));
console.log(g.depthFirstSearchRecursive(""));
console.log("----iteratively----");
console.log(g.depthFirstSearchIterative("A"));
console.log(g.depthFirstSearchIterative("E"));

console.log("===== BREADTH FIRST SEARCH ====");
console.log(g.breadthFirstSearch("A"));

console.log("---------numerical testing----------");
let numericalGraph = new Graph();

let num = 0;
let numArr = Array.from({length: 12}, ()=> {
    return num++;
})
numArr.forEach((num) => {
    numericalGraph.addVertex(num);
})

numericalGraph.addEdge(0, 1);
numericalGraph.addEdge(0, 2);
numericalGraph.addEdge(0, 9);
numericalGraph.addEdge(1, 6);
numericalGraph.addEdge(1, 3);
numericalGraph.addEdge(1, 11);
numericalGraph.addEdge(2, 6);
numericalGraph.addEdge(9, 4);
numericalGraph.addEdge(9, 8);
numericalGraph.addEdge(11, 5);
numericalGraph.addEdge(3, 5);
numericalGraph.addEdge(6, 4);
numericalGraph.addEdge(6, 5);
numericalGraph.addEdge(4, 7);
numericalGraph.addEdge(4, 8);
numericalGraph.addEdge(7, 5);
numericalGraph.addEdge(7, 10);
numericalGraph.addEdge(8, 10);
console.log(numericalGraph);

console.log(
    "depth first search: ",
    numericalGraph
        .depthFirstSearchRecursive(0));

console.log(
    "breadth first search: ",
    numericalGraph
        .breadthFirstSearch(0));
