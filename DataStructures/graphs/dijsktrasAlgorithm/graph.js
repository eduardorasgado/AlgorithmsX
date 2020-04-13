const { WeightedGraph } = require('./weighted-graph');
const { PriorityQueue } = require("./priorityQueue");

class Graph extends WeightedGraph {
    constructor() {
        super();
    }

    /**
     * Get the optimal path from A to B by using Dijkstras algorithm all
     * shortest path.
     *
     * @param startVertex
     * @param goalVertex
     */
    getShortestPath(startVertex, goalVertex) {
        let allShortestDistances = this.dijkstrasAlgorithm(startVertex);
        // we should extract the path from start to goal from above variable
        return allShortestDistances;
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
     *
     *      To understand a little more this we can see the next video:
     *              https://www.youtube.com/watch?v=5GT5hYzjNoo
     */
    dijkstrasAlgorithm(startVertex) {
        if(!this.adjacencyList[startVertex]) return undefined;
        let accumulatedPathQueue = new PriorityQueue();
        let shortestDistances = {};
        let previous = {};
        let visited = {}
        let keys =Object.keys(this.adjacencyList);
        this.createDistanceObject(shortestDistances, keys, startVertex);
        //this.createPrevObject(visited, keys)
        this.createPrevObject(previous, keys);
        console.log(visited);
        console.log(previous);
        console.log(shortestDistances);
        return;
        keys = null;

        // mark start as visited
        visited[startVertex] = true;
        let currentVertex = startVertex;
        while(true) {
            // shortestDistances.enqueue()

            for(let neighbor in currentVertex) {
                if(currentVertex.hasOwnProperty(neighbor)){
                    // we add the neighbor weight to the accumulated or current vertext
                    //add (the neighbor vertex, accumulated weight) to our queue
                }
            }
            currentVertex = accumulatedPathQueue.dequeue().getValue();
            visited[currentVertex] = true;
        }
        return previous;
    }

    /**
     * This function returns an object with adjacency list keys and infiny as value
     */
    createDistanceObject(shortestDistances, keys, startVertex) {
        keys.forEach((value) => shortestDistances[value] = Infinity);
        shortestDistances[startVertex] = 0;
    }

    createPrevObject(previous, keys) {
        keys.forEach((value) => previous[value] = null);
    }

}

exports.Graph = Graph;
