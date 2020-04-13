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
        console.log("all possible shortest paths: ", allShortestDistances);
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
        let nextCheaperPathQueue = new PriorityQueue();
        // Stores the new shortest distance for each node, do not store where the distance
        // comes from.
        let shortestDistances = {};
        // Stores where does the nodes comes from, store all the possible paths
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
        // how many nodes we have within the graph
        let graphLen = keys.length;
        keys = null;

        // mark start as visited
        visited[startVertex] = true;
        ++visited["length"];
        let currentVertex = startVertex;
        // finding all possible pathways
        let edge;
        let vertexTo;
        let accumulatedPathCost;
        do {
            for(edge of this.adjacencyList[currentVertex]) {
                vertexTo = edge.getToVertex();
                if(!visited[vertexTo]) {
                    // we add the neighbor weight to the accumulated or current vertex
                    //add (the neighbor vertex, accumulated weight) to our queue
                    accumulatedPathCost =
                        shortestDistances[currentVertex] + edge.getWeight();
                    //current vertex shortest distance is updated only if it gets a new shorter path
                    if(accumulatedPathCost < shortestDistances[vertexTo]) {
                        // do not store unique items for neighbor vertexes,
                        // but it is ignored since we are working on a priority queue
                        nextCheaperPathQueue.enqueue(accumulatedPathCost, vertexTo);
                        previous[vertexTo] = currentVertex;
                        shortestDistances[vertexTo] = accumulatedPathCost;
                    }
                }
            }
            // peck next less expensive (vertex, path)
            currentVertex = nextCheaperPathQueue.dequeue().getValue();
            visited[currentVertex] = true;
            ++visited["length"];

        } while(visited.length <= graphLen); // stops when all vertex have a shortest path

        return previous;
    }

    /**
     * This function returns an object with adjacency list keys and infiny as value
     * except for startVertex, it has a value of 0.
     *
     * @param shortestDistances
     * @param keys
     * @param startVertex
     */
    createDistanceObject(shortestDistances, keys, startVertex) {
        keys.forEach((value) => shortestDistances[value] = Infinity);
        shortestDistances[startVertex] = 0;
    }

    /**
     * help to allocate all the vertexes within the graph into a hash table with
     * vertex: null as key, value
     *
     * @param previous
     * @param keys
     */
    createPrevObject(previous, keys) {
        keys.forEach((value) => previous[value] = null);
    }

}

exports.Graph = Graph;
