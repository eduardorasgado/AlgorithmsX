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
    'Moscow'
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
    let sampling = sampleLen(worldwideFlights);

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
    return citiesWithin[0];
}
let xCity = cities[sampleLen(worldwideFlights)];
let yCity = printCitiesRelated(xCity);
printCitiesRelated(yCity);

worldwideFlights.removeEdge(xCity, yCity);

printCitiesRelated(xCity);
printCitiesRelated(yCity);
//console.log("\n---after removing--");
//console.log(worldwideFlights);
