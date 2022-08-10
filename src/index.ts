import { bellmanFord } from "./algorithms/bellmanFord";
import { findNegativeWeightCycle } from "./algorithms/findNegativeWeightCycle";
import { generateGraph } from "./utils";

const graph = generateGraph(3);

console.log("nodes: ", graph.nodeCount());
console.log(graph.nodes());

console.log("edges: ", graph.edgeCount());
graph.edges().map((edge) => {
  console.log(edge, graph.edge(edge.v, edge.w))
})

const response = bellmanFord(graph, '0');
console.log("bellmanFord: ");

response.distances.forEach((value, index) => {
  console.log(`node: ${index}, distance: ${value}`)
})

response.predecessors.forEach((value, index) => {
  console.log(`node: ${index}, predecessor: ${value}`)
})

const nodesInCycle = findNegativeWeightCycle(graph, response.distances, response.predecessors);

console.log("nodes in cycle: ", nodesInCycle);