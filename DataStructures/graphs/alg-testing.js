const { Graph } = require("./list-based-graph");

let cities = [
    'Tokyo',
    'Mexico City',
    'Bogota',
    'Madrid',
    'San Diego',
    'Shaghai',
    'New York',
    'Sao Paulo',
    'Praga',
    'Kiev',
    'Moscow',
    'Toronto',
    'London',
    'Cairo',
    'Caracas'
]

function sampleLen(graph) {
    return Math.floor(
        (Math.random() * 100) % graph.getSize())
}

let worldwideFlights = new Graph();

// inserting vertexes
cities.map((id) => {
    worldwideFlights.addVertex(id);
})
console.log(worldwideFlights);
// inserting edges to each one of the vertexes
cities.map((id) => {
    let sampling = 1 //sampleLen(worldwideFlights);

    for (let i = 0; i < sampling; i++) {
        let edge = sampleLen(worldwideFlights);
        // repetitions are avoided in addEdge method
        worldwideFlights.addEdge(cities[edge], id)
    }
})
console.log(worldwideFlights);

console.log("\n----removing from graph----");
function printCitiesRelated(city) {
    let citiesWithin = worldwideFlights.getVertex(city);
    console.log(city, citiesWithin);
    if(citiesWithin)
        if(citiesWithin.length > 0)
            return citiesWithin[0];
}
let xCity = cities[sampleLen(worldwideFlights)];
let yCity = printCitiesRelated(xCity);
printCitiesRelated(yCity);

worldwideFlights.removeEdge(xCity, yCity);

printCitiesRelated(xCity);
printCitiesRelated(yCity);
console.log("\n---after removing--");
worldwideFlights.removeVertex(cities.slice(-2)[0]);
console.log(worldwideFlights);

/**
 *  GRAPH TRAVERSAL
 *
 * */
console.log("graph traversal==================");
// for(let element in worldwideFlights.adjacencyList) {
//     if(worldwideFlights.adjacencyList.hasOwnProperty(element))
//         console.log(element);
// }
console.log("====== DEPH FIRST SEARCH =====");

console.log("----recursively----");
console.log(`FROM ${cities[0]}`,
    worldwideFlights
        .depthFirstSearchRecursive(cities[0]));

console.log(`FROM ${cities[2]}`,
    worldwideFlights
        .depthFirstSearchRecursive(cities[2]));
console.log("\n----iteratively----");
console.log(`FROM ${cities[0]}`,
    worldwideFlights
        .depthFirstSearchIterative(cities[0]));
console.log(`FROM ${cities[2]}`,
    worldwideFlights
        .depthFirstSearchIterative(cities[2]));

console.log("===== BREADTH FIRST SEARCH ====");
console.log(worldwideFlights
    .breadthFirstSearch(cities[0]));
