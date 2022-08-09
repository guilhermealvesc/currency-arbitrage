import { Graph } from "graphlib";

export function bellmanFord(graph: Graph, startNode: string) {
  const edgeCount = graph.edgeCount()
  const distances = new Array(edgeCount);
  const predecessors = new Array(edgeCount);
  
  for(let index = 0; index < edgeCount; index++) {
    distances[index] = Infinity;
    predecessors[index] = -1;
  }

  distances[Number(startNode)] = 0;

  for(let i = 0; i < edgeCount; i++) {
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