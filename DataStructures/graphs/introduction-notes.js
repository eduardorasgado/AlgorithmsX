/**
 *      GRAPHS
 *
 *          OBJECTIVES
 *
 *              Explain what a graph is
 *              Compare and contrast different types of graphs and their use cases
 *                  in the real world
 *              Implement a graph using an adjancency list
 *              Travers through a graph using BFS and DFS
 *              Compare and contrast graph traversal algorithms
 *
 *          WHAT ARE GRAPHS
 *
 *              A graph is a non linear data structure cosisting of  nodes and edges.
 *              The nodes are sometimes also referred to as vertices and the edges are
 *              lines or arcs that connect any two nodes in the graph. More formally
 *              a graph can be defined as:
 *
 *              A graph data structure consists of a finite(and possibly mutable)
 *              set of edges which connect a pair of nodes or points, together with a set of unordered
 *              pars of these vertices for an undirected graph or a set of ordered
 *              pairs for a directed graph.
 *
 *              0_______1___
 *              |       |   |__2
 *              |       |  ___|
 *              4_______3_|
 *              In the above graph, the set of vertices V={0, 1, 2, 3, 4} and the
 *              set of edges E= {01, 12, 23, 34, 04, 14, 13}
 *
 *              Graphs are used to represent networks.
 *
 *              Graphs are briefly: nodes + connections
 *                   B___A____E
 *                   |\__
 *                   |  |
 *              C____D  F
 *
 *              Graphs have no entry points
 *
 *          USES FOR GRAPHS
 *
 *              Social Networks
 *              Location / Mapping
 *              Routing Algorithms
 *              Visual Hierarchy
 *              File System Optimization
 *              Path finding
 *              Modeling internet
 *              Recomendation engines
 *              Everywhere...
 *
 *          ESSENTIAL GRAPH TERMS
 *
 *              Vertex - a node
 *              Edge - connection between nodes
 *              Weighted/ unweighted - values assigned to distances between vertices
 *              Directed/ Undirected - directions assigned to distances between vertices
 *
 *          TYPES OF GRAPHS
 *
 *              Tree - It is an undirected graph in which any two vertices are
 *              connected by exactly one path.
 *
 *              Undirected graphs: bidirectional connections between nodes
 *
 *              Directed graphs: connection between node A and node B follows a single
 *              direction, that means we can just either A -> B or A <- B, not both
 *              at the same time.
 *
 *              Weighted graph: Every edge has a value, a cost, edge could represent a
 *              distance and the value of the edge is that distance.
 *
 *              Unweighted: absence of a value associated to each edge between vertexes.
 *
 *          GRAPH REPRESENTATION
 *
 *              - Representation using an Adjancency Matrix
 *
 *                  Lets take the next undirected graph:
 *
 *                  A____B___
 *                 /         \
 *                F          C
 *                 \        /
 *                  E______D
 *
 *                  Adjancency Matrix is:
 *
 *                     A  B  C  D  E  F
 *                  A  0  1  0  0  0  1
 *                  B  1  0  1  0  0  0
 *                  C  0  1  0  1  0  0
 *                  D  0  0  1  0  1  0
 *                  E  0  0  0  1  0  1
 *                  F  1  0  0  0  1  0
 *
 *                  Storing edges between nodes
 *                      1: edge presence
 *                      0: edge absence
 *
 *              - Representation using an Adjancency List
 *
 *                  Let's take the next undirected graph
 *
 *                    __0____1_
 *                   /         \
 *                  5           2
 *                   \        /
 *                    4______3
 *
 *                  Then, the adjancency list is:
 *
 *                     [
 *                  0    [1, 5],
 *                  1    [0, 2],
 *                  2    [1, 3],
 *                  3    [2, 4],
 *                  4    [3, 5],
 *                  5    [0, 4]
 *                     ]
 *
 *                  What if we want to store even different numbers not ordered or
 *                  consecutives or even strings, then we can use Hash Tables
 *
 *                  Let's take the next undirected graph
 *
 *                        A________B
 *                       /          \
 *                      F           C
 *                      \           /
 *                       E_________D
 *
 *                   Then, the adjancency list will be the next hash table:
 *
 *                      [
 *                          "A": ["B", "F"],
 *                          "B": ["A", "C"],
 *                          "C": ["B", "D"],
 *                          "D": ["C", "E"],
 *                          "E": ["F", "D"],
 *                          "F": ["A", "E"],
 *                      ]
 *
 *          ADJANCENCY LIST VS ADJANCENCY MATRIX: DIFFERENCES AND BIG O
 *
 *              |V| = number of vertices
 *              |E| = number of edges
 *
 *              ______________________________________________________________
 *              |   Operation    |   Adjancency list  |    Adjancency Matrix |
 *              |________________|____________________|______________________|
 *              |Add Vertex      |        O(1)        |        O(|V^2|)      |
 *              |Add Edge        |        0(1)        |        O(1)          |
 *              |Remove Vertex   |    O(|V| + |E|)    |        O(|V^2|)      |
 *              |Remove Edge     |    O(|E|)          |        O(1)          |
 *              |Query           |    O(|V| + |E|)    |        O(1)          |
 *              |Storage(space)  |    O(|V| + |E|)    |        O(|V^2|)      |
 *              |____________________________________________________________|
 *
 *          ADJANCENCY LIST VS ADJANCENCY MATRIX: DIFFERENCES
 *
 *              Lists:
 *                [O] Can take up less space(in sparse graphs)
 *                [O] Faster to iterate over all edges
 *                [X] Can be slower to lookup specific edge
 *
 *              Matrix:
 *                [X] Takes up more space(in sparse graphs)
 *                [X] Slower to iterate over all edges
 *                [0] Faster to lookup specific edge
 *
 * */
