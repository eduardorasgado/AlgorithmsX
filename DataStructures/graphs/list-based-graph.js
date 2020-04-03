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

    removeVertex() {
        //
    }

    removeEdge(xVertex, yVertex) {
        if(xVertex !== yVertex) {
            if(this.adjacencyList[xVertex] && this.adjacencyList[yVertex]) {
                if(this.adjacent(xVertex, yVertex)){
                    console.log(this.adjacencyList[xVertex]
                        .filter((edge) => edge !== yVertex));
                    this.adjacencyList[yVertex]
                        .filter(edge => edge !== xVertex);
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
