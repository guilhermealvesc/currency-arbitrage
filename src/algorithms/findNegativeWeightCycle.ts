import { Graph } from "graphlib";

export function findNegativeWeightCycle(graph: Graph, distances: number[], predecessors: number[]): string[] {
  let nodesInCycle: string[] = [];
  
  graph.edges().forEach(({v, w}) => {
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

    }
  })


  return nodesInCycle;
}