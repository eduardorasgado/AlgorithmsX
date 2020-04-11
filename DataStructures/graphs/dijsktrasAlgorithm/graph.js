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
    dijkstrasShortestPath(startVertex, goalVertex) {
        let visited = []; // visited list
        let previous = {};
        let shortestDistances = {}
        let keys = Object.keys(this.adjacencyList);
        this.createDistanceObject(shortestDistances, keys);
        this.createPrevObject(previous, keys);
        keys = null;

        visited.push(startVertex);
        let currentVertex = startVertex;
        let currentVertexNeighbors;
        while(previous[goalVertex] !== null) {
            currentVertexNeighbors = this.getVertex(currentVertex);
            currentVertexNeighbors.forEach((neighbor) => {
                if(neighbor.getWeight() < shortestDistances[neighbor.toVertex()])
                    shortestDistances[neighbor.toVertex()] = neighbor.getWeight();
            })
        }

        console.log(shortestDistances);
        return previous;
    }

    /**
     * This function returns an object with adjacency list keys and infiny as value
     */
    createDistanceObject(shortestDistances, keys) {
        keys.forEach((value) => shortestDistances[value] = Infinity);
    }

    createPrevObject(previous, keys) {
        keys.forEach((value) => previous[value] = null);
    }

}

exports.Graph = Graph;
