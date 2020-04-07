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
                    this.adjacencyList[xVertex].push([yVertex, weight]);
                    this.adjacencyList[yVertex].push([xVertex, weight]);
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
            if(edge[0] == yVertex) {
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
}

exports.WeightedGraph = WeightedGraph;
