import { Graph } from "graphlib";
import { IBellmanFordResponse } from "./interface/responses";

export function bellmanFord(graph: Graph, startNode: string): IBellmanFordResponse {
  const nodeCount = graph.nodeCount()
  const distances = new Array(nodeCount);
  const predecessors = new Array(nodeCount);
  
  for(let index = 0; index < nodeCount; index++) {
    distances[index] = Infinity;
    predecessors[index] = -1;
  }

  distances[Number(startNode)] = 0;

  for(let i = 0; i < nodeCount - 1; i++) {
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

