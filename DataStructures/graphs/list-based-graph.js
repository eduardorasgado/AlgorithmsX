/**
 * We can represent a graph through a adjancency list.
 *  Why?
 *  Most data in the real world tends to lend itself to sparser and/or larger graphs
 *
 *  Undirected graph
 *  @class
 * */
class Graph {
    constructor() {
        // using built in JS hash table
        this.adjacencyList = {};
    }

    /**
     * Insert a new node
     * STEPS:
     *  Acceps a name of a vertex
     *  It should add a key to the adjancency list with the name of the vertex
     *  and set its value to be an empty array
     */
    addVertex(vertex) {
        if(!this.adjacencyList[vertex])
            this.adjacencyList[vertex] = [];
    }

    /**
     * adding edges to between two vertexes, avoiding to repeat insertions
     * STEPS
     *  Accepts two vertices, we can call them vertex1 and vertex2
     *  Find in the adjacency list the key of vertex1 and push vertex2 to the array
     *  Find in the adjacency list the key of vertex2 and push vertex1 to the array
     *  Dont worry about handling errors/invalid vertices
     * @param xVertex
     * @param yVertex
     */
    addEdge(xVertex, yVertex) {
        // not inserting vertex itself
        if(xVertex !== yVertex) {
            // valid vertexes
            if(this.adjacencyList[xVertex] && this.adjacencyList[yVertex]) {
                // verifying not repeating insertions(adding another edge between two vertexes)
                if(!this.adjacent(xVertex, yVertex)) {
                    this.adjacencyList[xVertex].push(yVertex);
                    this.adjacencyList[yVertex].push(xVertex);
                }
            }
        }
    }

    /**
     * Remove a vertex and neighbor connections to that vertex
     * STEPS:
     *  Accept a vertex to remove
     *  Loop as long as there are any other vertices in the adjancency list for that
     *      vertex
     *  Inside the loop, call oremoveEdge function with the vertex weare removing
     *      and any values in the adjacency list for that vertex
     *  Delete the key in the adjacency list for that vertex.
     *
     * @param vertexToRemove
     */
    removeVertex(vertexToRemove) {
        if(this.adjacencyList[vertexToRemove]) {
            for(let vertex in this.adjacencyList) {
                if(this.adjacencyList.hasOwnProperty(vertex)
                    && vertex !== vertexToRemove) {
                    console.log(vertexToRemove, vertex)
                    this.removeEdge(vertexToRemove, vertex);
                }
            }
            delete this.adjacencyList[vertexToRemove];
        }
    }

    /**
     * Removing an edge between two nodes or vertexes.
     * STEPS
     *  should accept two vertices, we will call them vertex1 and vertex2
     *  should reassign the key of vertex1 to be an array that does not contain vertex2
     *  should reassign the key of vertex2 to be an array that does not contain vertex1
     *  do not worry about handling errors/ invalid vertices
     * @param xVertex
     * @param yVertex
     */
    removeEdge(xVertex, yVertex) {
        if(xVertex !== yVertex) {
            if(this.adjacencyList[xVertex] && this.adjacencyList[yVertex]) {
                if(this.adjacent(xVertex, yVertex)){
                    this.adjacencyList[xVertex] = this.adjacencyList[xVertex]
                        .filter((element) => element !== yVertex);
                    this.adjacencyList[yVertex] = this.adjacencyList[yVertex]
                        .filter((element) => element !== xVertex);
                }
            }
        }
    }

    /**
     *
     * @param vertex
     * @returns {undefined|*}
     */
    getVertex(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        return this.adjacencyList[vertex];
    }

    /**
     * Tests wheter there is an edge from the vertex x to the vertex y
     * @param xVertex
     * @param yVertex
     * @returns {boolean}
     */
    adjacent(xVertex, yVertex) {
        return this.adjacencyList[xVertex].includes(yVertex);
    }

    /**
     * Get the amount of vertexes within the graph
     * @returns {number}
     */
    getSize() {
        let size = 0;
        let vertex;
        for(vertex in this.adjacencyList) {
            if(this.adjacencyList.hasOwnProperty(vertex))
                ++size;
        }
        return size;
    }
}

exports.Graph = Graph;
