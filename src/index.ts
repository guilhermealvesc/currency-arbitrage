import { Graph } from "graphlib";
import { bellmanFord } from "./algorithms/bellmanFord";
import { findNegativeWeightCycle } from "./algorithms/findNegativeWeightCycle";
import { generateGraph } from "./utils";

const log = Math.log;

//https://www.thealgorists.com/Algo/ShortestPaths/Arbitrage
const graphTheAlgorists = new Graph({ directed: true });

graphTheAlgorists.setNode('0', 'USD');
graphTheAlgorists.setNode('1', 'EUR');
graphTheAlgorists.setNode('2', 'GBP');
graphTheAlgorists.setNode('3', 'CHF');
graphTheAlgorists.setNode('4', 'CAD');

// USD <-> EUR
graphTheAlgorists.setEdge('0', '1', -log(0.741).toFixed(3));
graphTheAlgorists.setEdge('1', '0', -log(1/0.741).toFixed(3));

// USD <-> GBP
graphTheAlgorists.setEdge('0', '2', -log(0.657).toFixed(3));
graphTheAlgorists.setEdge('2', '0', -log(1/0.657).toFixed(3));

// USD <-> CHF
graphTheAlgorists.setEdge('0', '3', -log(1.061).toFixed(3));
graphTheAlgorists.setEdge('3', '0', -log(1/1.061).toFixed(3));

// USD <-> CAD
graphTheAlgorists.setEdge('0', '4', -log(1.005).toFixed(3));
graphTheAlgorists.setEdge('4', '0', -log(1/1.005).toFixed(3));

// EUR <-> GBP
graphTheAlgorists.setEdge('1', '2', -log(0.888).toFixed(3));
graphTheAlgorists.setEdge('2', '1', -log(1/0.888).toFixed(3));

// EUR <-> CHF
graphTheAlgorists.setEdge('1', '3', -log(1.433).toFixed(3));
graphTheAlgorists.setEdge('3', '1', -log(1/1.433).toFixed(3));

// EUR <-> CAD
graphTheAlgorists.setEdge('4', '1', -log(0.732).toFixed(3));
graphTheAlgorists.setEdge('1', '4', -log(1/0.732).toFixed(3));

// GBP <-> CHF
graphTheAlgorists.setEdge('2', '3', -log(1.614).toFixed(3));
graphTheAlgorists.setEdge('3', '2', -log(1/1.614).toFixed(3));

// GBP <-> CAD
graphTheAlgorists.setEdge('2', '4', -log(1.538).toFixed(3));
graphTheAlgorists.setEdge('4', '2', -log(1/1.538).toFixed(3));

// CHF <-> CAD
graphTheAlgorists.setEdge('3', '4', -log(0.953).toFixed(3));
graphTheAlgorists.setEdge('4', '3', -log(1/0.953).toFixed(3));

// Cria nó com peso 0 para todos outros nós
graphTheAlgorists.setNode('5');

graphTheAlgorists.nodes().forEach(node => {
  if(node !== '5')
    graphTheAlgorists.setEdge('5', node, 0);
});

const responseTheAlgorists = bellmanFord(graphTheAlgorists, '5');

const nodesInCycleTa = findNegativeWeightCycle(
  graphTheAlgorists, 
  responseTheAlgorists.distances, 
  responseTheAlgorists.predecessors
);

console.log("The Algorists nodes in cycle: ", nodesInCycleTa);

// Teste com 100 vertices
const nodeCount = 100;

const graph = generateGraph(nodeCount);

graph.setNode(nodeCount.toString());

graph.nodes().forEach(node => {
  if(node !== nodeCount.toString())
  graph.setEdge(nodeCount.toString(), node, 0);
});

const response = bellmanFord(graph, nodeCount.toString());

const nodesInCycle = findNegativeWeightCycle(graph, response.distances, response.predecessors);

console.log("100 nodes test cycle: ", nodesInCycle);