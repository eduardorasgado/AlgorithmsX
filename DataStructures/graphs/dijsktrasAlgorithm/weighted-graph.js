/**
 * For weighted graphs
 */
class Edge {
    constructor(vertex, weight) {
        this.toVertex = vertex;
        this.weight = weight;
    }

    getToVertex() { return this.toVertex; }
    setToVertex(vd) { this.toVertex = vd; }
    getWeight() { return this.weight; }
    setWeight(weight) { this.weight = weight; }
}

/**
 * Undirected, weighted graph
 * @class
 */
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(xVertex, yVertex, weight) {
        if(xVertex !== yVertex) {
            if(this.adjacencyList[xVertex] && this.adjacencyList[yVertex]){
                if(!this.adjacent(xVertex, yVertex)) {
                    this.adjacencyList[xVertex]
                        .push(new Edge(yVertex, weight));
                    this.adjacencyList[yVertex]
                        .push(new Edge(xVertex, weight));
                }
            }
        }
    }

    /**
     * Return if X vertex has an edge with yVertex
     * @param xVertex
     * @param yVertex
     */
    adjacent(xVertex, yVertex) {
        let adjacentExist = false;
        let edge;
        for(edge of this.adjacencyList[xVertex]){
            if(edge.getToVertex() === yVertex) {
                adjacentExist = true;
                break;
            }
        }
        return adjacentExist;
    }

    getSize() {
        let size = 0;
        let element;
        for (element in this.adjacencyList) {
            if(this.adjacencyList.hasOwnProperty(element)) ++size;
        }
        return size;
    }

    depthFirstSearch(startVertex) {
        let resultList = [];
        let visited = {};

    }

    breadthFirstSearch(startVertex) {
        //
    }
}

exports.WeightedGraph = WeightedGraph;
