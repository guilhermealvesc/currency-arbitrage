import { Graph } from "graphlib";
import { IBellmanFordResponse } from "./interface/responses";

export function bellmanFord(graph: Graph, startNode: string): IBellmanFordResponse {
  // Armazena em nodeCount a quantidade de vértices do grafo
  const nodeCount = graph.nodeCount()
  const distances = new Array(nodeCount);
  const predecessors = new Array(nodeCount);
  
  // Inicializa o array de distancias com infinito e 
  // o array de predecessores com -1
  for(let index = 0; index < nodeCount; index++) {
    distances[index] = Infinity;
    predecessors[index] = -1;
  }

  // Distancia do nó inicial para ele mesmo é 0
  distances[Number(startNode)] = 0;

  for(let i = 0; i < nodeCount - 1; i++) {
    // Para cada aresta do grafo
    graph.edges().forEach(({v, w}) => {

      // Relaxamento
      if(distances[+w] > distances[+v] + graph.edge(v, w)) {
        // graph.edge(v, w) retorna o peso da aresta
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

