# Currency arbitrage algorithm

Graph Algorithm to find arbitration opportunities.

## Students

- Guilherme Alves Carvalho
- Yuri Henrique B. Maciel

## Folder structure

- `src/`
  - `index.ts`: contains the algorithms tests with a valid graph and a random generated one

  - `utils/`
    - `index.ts`: contains the auxiliar function to generate a graph

  - `algorithms/`: contains the algorithms to find arbitration opportunities
    - `bellmanFord.ts`: Bellman-Ford algorithm
    - `findeNegativeWeightCycle.ts`: algorithm to find negative weight cycles
