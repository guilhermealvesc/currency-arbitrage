import { Graph } from "graphlib";

export function bellmanFord(graph: Graph, startNode: string) {
  const nodeCount = graph.nodeCount()
  const distances = new Array(nodeCount);
  const predecessors = new Array(nodeCount);
  
  for(let index = 0; index < nodeCount; index++) {
    distances[index] = Infinity;
    predecessors[index] = -1;
  }

  distances[Number(startNode)] = 0;

  for(let i = 0; i < nodeCount; i++) {
    graph.edges().forEach(({v, w}) => {

      if(distances[+w] > distances[+v] + graph.edge(v, w)) {
        distances[+w] = distances[+v] + graph.edge(v, w)
        predecessors[+w] = +v
      }
    })
  }
  return {
    distances,
    predecessors
  }
}