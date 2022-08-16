import { Graph } from "graphlib";

export function findNegativeWeightCycle(graph: Graph, distances: number[], predecessors: number[]): string[] {
  let nodesInCycle: string[] = [];
  // Array de arestas do grafo
  // Cada edge é um objeto contendo o nó de origem e o 
  // nó de destino
  const edges = graph.edges()

  // Acha ciclo negativo, tentando mais uma relaxamento,
  // se houver, quer dizer que existe um ciclo negativo
  for(const {v, w} of edges) {
    if(distances[+w] > distances[+v] + graph.edge(v, w)) {

      const visitedNodes = new Array<boolean>(graph.nodeCount())
      for(let i = 0; i < visitedNodes.length; i++) {
        visitedNodes[i] = false
      }

      let currentVisitingNode = +w;
      while(!visitedNodes[currentVisitingNode]) {
        visitedNodes[currentVisitingNode] = true;
        currentVisitingNode = predecessors[currentVisitingNode];
      }

      nodesInCycle.push(currentVisitingNode.toString());
      let vertex = predecessors[currentVisitingNode]
      while(vertex !== currentVisitingNode) {
        nodesInCycle.unshift(vertex.toString());
        vertex = predecessors[vertex];
      }
      return nodesInCycle;
    }
  }

  return [];
}