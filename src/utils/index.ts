import { Graph } from 'graphlib';

// Gera grafo completo
export function generateGraph(size: number): Graph {
  const graph = new Graph();
  const log = Math.log;

  // Cria nós até a quantidade informada
  for (let i = 0; i < size; i++)
    graph.setNode(i.toString(), {});
  
  // Loop aninhado para criar arestas entre todos os nós
  graph.nodes().forEach(node1 => {
    graph.nodes().forEach(node2 => {
      // Se já houver aresta, ignora
      if (node1 === node2 || graph.hasEdge(node1, node2)) return;
      else {
        const random = Math.random() * 3;

        // Aresta negativa para rodar bellman ford
        graph.setEdge(node1, node2, -log(random).toFixed(3));
        graph.setEdge(node2, node1, -log(1/random).toFixed(3));
      }
    })  
  })

  return graph;
}