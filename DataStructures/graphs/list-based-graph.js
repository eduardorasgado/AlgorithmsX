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
     * @param vertex1
     * @param vertex2
     */
    addEdge(vertex1, vertex2) {
        // not inserting vertex itself
        if(vertex1 !== vertex2) {
            if(this.adjancencyList[vertex1] && this.adjancencyList[vertex2]) {
                // verifying not repeating insertions
                if(!this.adjancencyList[vertex1].includes(vertex2) &&
                    !this.adjancencyList[vertex2].includes(vertex1)) {
                    this.adjancencyList[vertex1].push(vertex2);
                    this.adjancencyList[vertex2].push(vertex1);
                }
            }
        }
    }

    /**
     * Get the amount of vertexes within the graph
     * @returns {number}
     */
    getSize() {
        let size = 0;
        let vertex;
        for(vertex in this.adjancencyList) {
            ++size;
        }
        return size;
    }
}

exports.Graph = Graph;
