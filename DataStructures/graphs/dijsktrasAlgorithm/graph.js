const { WeightedGraph } = require('./weighted-graph');


class Graph extends WeightedGraph {
    constructor() {
        super();
    }

    /**
     *      DIJAKSTRAS ALGORITHM
     *
     *  The Approach
     *      1. Every time we look to visit a new node, we pick the node with the
     *      smalles known distance to visit first
     *
     *      2. Once we have moved to the node we are going to visit, we look at each
     *      of its neighbors
     *
     *      3. For each neighboring node, we calculate the distance by assuming the
     *      total edges that lead to the node we are cheching from the stating node.
     *
     *      4. If the new total distance to a node is less than the previous total,
     *      we store the new shorter distance for that node.
     */
    dijkstrasShortestPath() {
        console.log("getting the shortest path...");
    }
}

exports.Graph = Graph;
