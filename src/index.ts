import { bellmanFord } from "./algorithms/bellmanFord";
import { generateGraph } from "./utils";

const graph = generateGraph(5);

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