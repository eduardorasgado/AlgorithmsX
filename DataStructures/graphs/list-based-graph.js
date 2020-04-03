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
        this.adjancencyList = {};
    }

    /**
     * Insert a new node
     * STEPS:
     *  Acceps a name of a vertex
     *  It should add a key to the adjancency list with the name of the vertex
     *  and set its value to be an empty array
     */
    addVertex(vertex) {
        if(!this.adjancencyList[vertex])
            this.adjancencyList[vertex] = [];
    }

    /**
     * adding edges to between two vertexes, avoiding to repeat insertions
     * @param xVertex
     * @param yVertex
     */
    addEdge(xVertex, yVertex) {
        // not inserting vertex itself
        if(xVertex !== yVertex) {
            if(this.adjancencyList[xVertex] && this.adjancencyList[yVertex]) {
                // verifying not repeating insertions
                if(!this.adjacent(xVertex, yVertex)) {
                    this.adjancencyList[xVertex].push(yVertex);
                    this.adjancencyList[yVertex].push(xVertex);
                }
            }
        }
    }

    /**
     * Tests wheter there is an edge from the vertex x to the vertex y
     * @param xVertex
     * @param yVertex
     * @returns {boolean}
     */
    adjacent(xVertex, yVertex) {
        return this.adjancencyList[xVertex].includes(yVertex);
    }

    /**
     * Get the amount of vertexes within the graph
     * @returns {number}
     */
    getSize() {
        let size = 0;
        let vertex;
        for(vertex in this.adjancencyList) {
            if(this.adjancencyList.hasOwnProperty(vertex))
                ++size;
        }
        return size;
    }
}

exports.Graph = Graph;
