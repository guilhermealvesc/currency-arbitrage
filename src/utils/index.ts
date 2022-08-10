import { Graph } from 'graphlib'
import { CurrencyExchanges } from './interface/CurrencyExchanges';

export function generateGraph(numberOfNodes: number): Graph {
  return generateGraphByData(generateData(numberOfNodes));
}

function generateGraphByData(coins: CurrencyExchanges): Graph {
  const graph = new Graph();
  coins.forEach(([fromCoin, exchangeCoins]) => {
    graph.setNode(fromCoin);
    
    exchangeCoins.forEach(([toCoin, exchangeValue]) => {
      graph.setNode(toCoin);

      graph.setEdge(fromCoin, toCoin, -Math.log2(exchangeValue));
      graph.setEdge(toCoin, fromCoin, -Math.log2(1/exchangeValue));
    })

  })

  return graph;
}

function generateData(length: number): CurrencyExchanges {
  const nodes: CurrencyExchanges = Array.from({ length }, (_, i) => ([i.toString(), []]));

  const visitedNodes = new Array<number>(length);

  for(let i = 0; i < visitedNodes.length; i++) {
    visitedNodes[i] = 0;
  }

  while(visitedNodes.findIndex(visited => visited !== 3) !== -1) {
    let startNode, endNode, conversionValue = Math.random() * 10;

    do {
      startNode = Math.floor(Math.random() * length)
      endNode = Math.floor(Math.random() * length)
    } while(startNode === endNode);

    if(visitedNodes[startNode] === 3 && visitedNodes[endNode] === 3)
      continue;

    nodes[startNode][1].push([endNode.toString(), conversionValue]);
    
    if(visitedNodes[startNode] !== 3)
      visitedNodes[startNode] ++;

    if(visitedNodes[endNode] !== 3)
      visitedNodes[endNode] ++;
  }

  return nodes;
}