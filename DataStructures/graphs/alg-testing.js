const { Graph } = require("./list-based-graph");

let computerIds = [
    '12.35.54.1',
    '13.56.2.1',
    '12.66.44.33',
    '192.168.23.1',
    '255.255.255.1',
    '255.255.1.1',
    '127.0.0.1'
]

let network = new Graph();

// inserting vertexes
computerIds.map((id) => {
    network.addVertex(id);
})

// inserting edges to each one of the vertexes
computerIds.map((id) => {
    let sampling = Math.floor(
        (Math.random() * 100) % network.getSize())

    for (let i = 0; i < sampling; i++) {
        let edge = Math.floor(
            (Math.random() * 100) % network.getSize());
        // repetitions are avoided in addEdge method
        network.addEdge(computerIds[edge], id)
    }
})
console.log(network);
