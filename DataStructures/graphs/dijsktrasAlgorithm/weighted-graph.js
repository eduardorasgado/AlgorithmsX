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

    /**
     * Add a neighbor then explore and add its neighbors before go next neighbor
     * @param startVertex
     * @returns {[]}
     */
    depthFirstSearch(startVertex) {
        let resultList = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            resultList.push(vertex)
            visited[vertex] = true;
            let edge;
            let neighbor;
            for(edge of adjacencyList[vertex]) {
                neighbor = edge.getToVertex();
                if(!visited[neighbor]) dfs(neighbor);
            }
        })(startVertex);

        return resultList;
    }

    /**
     * Explore all the neighbors in a depth level before adding the neighbors of
     * the current neighbors in next depth level.
     * @param vertex
     * @returns {[]|undefined}
     */
    breadthFirstSearch(vertex) {
        if(!this.adjacencyList[vertex]) return undefined;
        let resultsList = [];
        let visited = {};
        let visitQueue = [vertex]; // preferable to use a real queue here
        while(visitQueue.length > 0) {
            vertex = visitQueue.shift();
            if(!visited[vertex]) {
                resultsList.push(vertex);
                visited[vertex] = true;
                let neighbor;
                this.adjacencyList[vertex].forEach((edge) => {
                    neighbor = edge.getToVertex();
                    if(!visited[neighbor]) visitQueue.push(neighbor);
                })
            }
        }
        return resultsList;
    }
}

exports.WeightedGraph = WeightedGraph;
