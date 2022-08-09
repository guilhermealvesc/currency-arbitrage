import { Graph } from 'graphlib'
import { CurrencyExchanges } from './interface/CurrencyExchanges';

export function generateGraph(coins: CurrencyExchanges): Graph {

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