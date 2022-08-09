import { generateGraph } from "./utils";

const graph = generateGraph(5);

console.log("nodes: ", graph.nodeCount());
console.log(graph.nodes());

console.log("edges: ", graph.edgeCount());
graph.edges().map((edge) => {
  console.log(edge, graph.edge(edge.v, edge.w))
})
