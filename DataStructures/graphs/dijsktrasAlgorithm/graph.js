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
        // Stores all the paths for each neighbor we get for visited
        // vertex and get the next most short distance to add to visited.
        // Stores (current vertex, path arrival cost), do not store node that current comes from
        let accumulatedPathQueue = new PriorityQueue();
        // Stores the new shortest distance for each node, do not store where the distance
        // comes from.
        let shortestDistances = {};
        // store where does the nodes comes from, store all the possible paths
        // comes from START to all the other nodes.
        // We have the longest but efficient shortest path in all the graph.
        // As a result every node in the 'main shortest path pathway' has a shortest path
        let previous = {};
        // stores all the already visited nodes at time t.
        // help to define when to stop the algorithm
        let visited = { "length": 0 }
        let keys =Object.keys(this.adjacencyList);
        this.createDistanceObject(shortestDistances, keys, startVertex);
        this.createPrevObject(previous, keys);
        let graphLen = keys.length;
        keys = null;

        // mark start as visited
        visited[startVertex] = true;
        ++visited["length"];
        let currentVertex = startVertex;
        // finding all possible pathways
        do {
            console.log("vertex: ", currentVertex);
            for(let neighbor of this.adjacencyList[currentVertex]) {
                if(!visited[neighbor.getToVertex()]) {
                    console.log("neighbor not visited: ", neighbor.getToVertex());
                    // we add the neighbor weight to the accumulated or current vertex
                    //add (the neighbor vertex, accumulated weight) to our queue
                    let accPathLen = shortestDistances[currentVertex] + neighbor.getWeight();
                    console.log(accPathLen, neighbor.getToVertex());
                    if(accPathLen < shortestDistances[neighbor.getToVertex()]) {
                        // do not store unique items for neighbor vertexes,
                        // but it is ignored since we are working on a priority queue
                        accumulatedPathQueue.enqueue(accPathLen, neighbor.getToVertex());
                        previous[neighbor.getToVertex()] = currentVertex;
                        shortestDistances[neighbor.getToVertex()] = accPathLen;
                    }
                }
            }
            console.log("queue: ", accumulatedPathQueue)
            // there is just a problem over here, if current Ver
            currentVertex = accumulatedPathQueue.dequeue().getValue();
            visited[currentVertex] = true;
            ++visited["length"];
            console.log("visited", visited);

        } while(visited.length <= graphLen); // stops when all vertex have a shortest path

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
