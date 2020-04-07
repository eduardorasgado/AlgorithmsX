const { WeightedGraph } = require("./weighted-graph");
const { inspectObject } = require("../../logUtils");

let cities = [
    'Tokyo',
    'Mexico City',
    'Bogota',
    'Madrid',
    'San Diego',
    'Shaghai',
    'New York',
    'Sao Paulo',
    //'Praga',
    //'Kiev',
    //'Moscow',
    //'Toronto',
    //'London',
    //'Cairo',
    //'Caracas'
]

function sampleLen(graph) {
    return Math.floor(
        (Math.random() * 100) % graph.getSize())
}

function sampleWeight(graph) {
    return Math.floor(
        (Math.random() * 100) % 1000)
}

let worldwideFlights = new WeightedGraph();

// inserting vertexes
cities.map((id) => {
    worldwideFlights.addVertex(id);
})
console.log(worldwideFlights);
// inserting edges to each one of the vertexes
cities.map((id) => {
    let sampling = 1;
    for (let i = 0; i < sampling; i++) {
        let edge = sampleLen(worldwideFlights);
        // repetitions are avoided in addEdge method
        worldwideFlights.addEdge(cities[edge], id, sampleWeight());
    }
})
inspectObject(worldwideFlights);


console.log("graph traversal==================");
// for(let element in worldwideFlights.adjacencyList) {
//     if(worldwideFlights.adjacencyList.hasOwnProperty(element))
//         console.log(element);
// }
console.log("====== DEPH FIRST SEARCH =====");

console.log("----recursively----");
console.log(`FROM ${cities[0]}`,
    worldwideFlights
        .depthFirstSearch(cities[0]));

console.log("===== BREADTH FIRST SEARCH ====");
console.log(worldwideFlights
    .breadthFirstSearch(cities[0]));
