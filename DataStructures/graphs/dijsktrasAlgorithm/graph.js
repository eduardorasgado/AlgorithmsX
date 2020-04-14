const { WeightedGraph } = require('./weighted-graph');
const { PriorityQueue } = require("./priorityQueue");

class Graph extends WeightedGraph {
    constructor() {
        super();
    }


    /**
     * helper to reverse an array efficiently
     * @param path
     */
    reverser(path) {
        let left = 0;
        let right = path.length - 1;
        let tempValue = null;
        for(left, right; left < right; ++left, --right) {
            tempValue = path[left];
            path[left] = path[right];
            path[right] = tempValue;
        }
    }

    /**
     * create a list to store the path got in dijkstras algorithm from a to b
     * @param startVertex
     * @param goalVertex
     * @param allShortestDistances
     * @returns {[*]}
     */
    extractPath(startVertex, goalVertex, allShortestDistances) {
        // extracts the requested path from all the shortest paths
        let specificShortestPath = [goalVertex];
        let currentNode = goalVertex;
        while(currentNode !== startVertex) {
            currentNode = allShortestDistances[currentNode];
            specificShortestPath.push(currentNode);
        }
        this.reverser(specificShortestPath);
        return specificShortestPath;
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

        return this.extractPath(startVertex, goalVertex, allShortestDistances)
    }

    /**
     *      DIJKSTRA'S ALGORITHM(100% own implementation)
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
     *
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
        let visited = { "length": 0 };
        let keys =Object.keys(this.adjacencyList);
        this.fillingObjects(shortestDistances, previous, keys, startVertex);
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
     *      DIJKSTRA'S ALGORITHM SLIGHLY MODIFIED TO GET THE SHORTEST PATH
     *
     *  The official pseudocode based implementation, not mine really.
     *  But the 'better one'
     *
     *  Note: there are a couple of changes in algorithm than above one but it is
     *  the same algorithm and same process.
     *
     *  STEPS:(for shortest path dijkstras)
     *  Accept a starting an ending vertex
     *  Create an object(distances) and set each key to be every vertex in the
     *      adjacency list with value of infinity, except for the starting vertex
     *      which should have a value of 0.
     *  After setting a value in the distances object, add each vertex with a priority
     *      of infinity to the priority queue, except the starting vertex, which should
     *      have a priority of 0 because thats where we begin.
     *  Create another object called previous and set each key to be every vertex in
     *      the adjacency list with a value of null
     *  Start looping as long as there is anything in the priority queue
     *      Dequeue a vertex from the priority queue
     *      if that vertex is the same as the ending vertex - we are done
     *      Otherwise loop through each value i the adjacency list at that vertex
     *          Calculate the distance to that vertex from the stating vertex
     *          If the distance is less than what is currently stored in out distances
     *          object
     *              Update the distances object with new lower distance
     *              Update the previous object to contain that vertex
     *              Enqueue the vertex with the total distance from the start node
     *
     * @param startVertex
     * @param goalVertex
     * @returns {{}}
     */
    shortestPathDijkstras(startVertex, goalVertex) {
        let distances = {};
        let previous = {};

        let keys = Object.keys(this.adjacencyList);
        let possiblePathsQueue = new PriorityQueue();
        // filling distances, previous and the queue
        // 'V2' does not mean anything relevant for the algorithm
        this.fillingObjectsV2(distances, previous, possiblePathsQueue,
                keys, startVertex);
        keys = null;

        let currentVertex;
        let currentEdge;
        let neighbor;
        let accumulatedDistance;
        while(possiblePathsQueue.getSize()) {
            currentVertex = possiblePathsQueue.dequeue().getValue();

            if(currentVertex === goalVertex) break;
            for(currentEdge of this.adjacencyList[currentVertex]) {

                neighbor = currentEdge.getToVertex();
                accumulatedDistance = distances[currentVertex] + currentEdge.getWeight()

                if(accumulatedDistance < distances[neighbor]) {
                    distances[neighbor] = accumulatedDistance;
                    previous[neighbor] = currentVertex;
                    possiblePathsQueue.enqueue(accumulatedDistance, neighbor);
                }
            }
        }

        console.log(previous);
        return this.extractPath(startVertex, goalVertex, previous);
    }

    /**
     * This function returns an object with adjacency list keys and infiny as value
     * except for startVertex, it has a value of 0.
     *
     * Also helps to allocate all the vertexes within the graph into a hash table with
     * vertex: null as key, value
     *
     * @param shortestDistances
     * @param keys
     * @param startVertex
     */
    fillingObjects(shortestDistances, previous, keys, startVertex) {
        keys.forEach((value) => {
            shortestDistances[value] = Infinity
            previous[value] = null
        });
        shortestDistances[startVertex] = 0;
    }

    /**
     * In addition to fillingObjects v1 it enqueues the possiblePathsQueue with
     * initial shortestDistances values and keys
     *
     * @param shortestDistances
     * @param previous
     * @param possiblePathsQueue
     * @param keys
     * @param startVertex
     */
    fillingObjectsV2(shortestDistances, previous, possiblePathsQueue,
                     keys, startVertex) {
        keys.forEach((value) => {
            shortestDistances[value] = Infinity;
            previous[value] = null;
            (value !== startVertex) && possiblePathsQueue.enqueue(Infinity, value);
        });
        shortestDistances[startVertex] = 0;
        possiblePathsQueue.enqueue(0, startVertex);
    }

}

exports.Graph = Graph;
