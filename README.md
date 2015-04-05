8 rainhas - Busca em profundidade limitada
==============

8 rainhas é um jogo no qual o objetivo é colocar 8 peças da rainha no jogo de Xadrez, fazendo com que nenhuma ataque a outra.
Para mais informações, você pode encontrar nos seguintes links:

- Português: [Wikipédia](http://pt.wikipedia.org/wiki/Problema_das_oito_damas)
- English: [Wikipédia](http://en.wikipedia.org/wiki/Eight_queens_puzzle)
- Spanish: [Wikipédia](http://es.wikipedia.org/wiki/Problema_de_las_ocho_reinas)

Em um tabuleiro de 8x8, podemos realizar **92** soluções diferentes. Atráves de
uma árvore, conseguimos percorrer por todas as alternativas vindas de um ponto inicial.
Com isso foi feito a implementação e a exibição do número de passos utilizados para
encontrar uma solução com o método de [busca em profundidade limitada](http://en.wikipedia.org/wiki/Depth-limited_search)
