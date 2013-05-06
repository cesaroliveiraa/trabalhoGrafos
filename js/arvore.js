/**
 * Marca os pontos e gera os filhos possível a partir daquela situação do tabuleiro
 * @param object tabuleiro Tabuleiro  atual
 * @returns {Boolean|Array} False para fim da recursividade e Array com
 * os filhos do tabuleiro atual
 */
function setPointTree(tabuleiro) {
    var posicoes = simulaMatriz(tabuleiro);    
    var pontosLivre = extraiPontos(posicoes);
    // Verifica se o tabuleiro simulado existe alguma posição vazia
    if (pontosLivre.length == 0) {
        return false;
    } else {
        var tabuleiros = new Array();
        for (var x in pontosLivre) {
            var _tabuleiro = {
                linha: pontosLivre[x][0],
                coluna: pontosLivre[x][1],
                filhos: new Array(),    
                pai: tabuleiro
            };
            // CUIDADO! USO DE RECURSIVIDADE!
            // Preenche os filhos com backtracking
            _tabuleiro.filhos = setPointTree(_tabuleiro);
            tabuleiros.push(_tabuleiro);
        }
        return tabuleiros;
    }
}

/**
 * Gera uma árvore com todas as possibilidade a partir de um ponto inicial
 * @returns object Arvore com todas as possibilidades do jogo
 */
function novaArvore() {
    var tabuleiro = {
        linha: 0,
        coluna: 3,
        filhos: new Array(),
        getPai: function() { return this; }
    }
    tabuleiro.filhos = setPointTree(tabuleiro);
    return tabuleiro;
}

/**
 * Retira todos as posições que poderam ser marcadas por uma rainha
 * @param array posicoes Matriz marcada
 * @returns array Posiçẽos livres
 */
function extraiPontos(posicoes) {
    var pontosLivre = new Array();
    for (var i in posicoes) {
        for (var j in posicoes[i]) {
            if (posicoes[i][j] == 0) {
                pontosLivre.push([parseInt(i), parseInt(j)]);
            }
        }
    }
    return pontosLivre;
}

/**
 * Simula uma matriz com os pontos dados pelo tabuleiro
 * @param object tabuleiro Tabuleiro atual no qual será simulado
 * @returns array Matriz simulada com os pontos
 */
function simulaMatriz(tabuleiro) {
    var posicoes = novaMatriz();
    // Não é a raiz
    if (typeof(tabuleiro.pai) != 'undefined') {
        // Marca o ponto do tabuleiro inicial
        posicoes = setValuesMatriz(tabuleiro.linha, tabuleiro.coluna, 2, posicoes);
        posicoes[tabuleiro.linha][tabuleiro.coluna] = 1;
        
        // Marca os pontos até encontrar a posição inicial
        var pai = tabuleiro.pai;        
        while (typeof(pai.pai) != 'undefined') {
            //console.log(pai);
            posicoes = setValuesMatriz(pai.linha, pai.coluna, 2, posicoes);
            posicoes[pai.linha][pai.coluna] = 1;
            pai = pai.pai;
        }
    } else {
        var pai = tabuleiro.getPai();
    }
    // Preenche os dados com a posição do tabuleiro raiz
    posicoes = setValuesMatriz(pai.linha, pai.coluna, 2, posicoes);
    posicoes[pai.linha][pai.coluna] = 1;
    return posicoes;
}

/*
 * Posições do tabuleiro indicada pelo tabuleiro,
 * no qual é indicado pelo seu indice o valor da linha
 * e depois as colunas 
 */
function novaMatriz() {
    var posicoes    = [0, 1, 2, 3, 4, 5, 6, 7];
        posicoes[0] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[1] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[2] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[3] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[4] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[5] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[6] = [0, 0, 0, 0, 0, 0, 0, 0];
        posicoes[7] = [0, 0, 0, 0, 0, 0, 0, 0];
    return posicoes;
}

/**
 * Percorre todos as peças na horizontal, vertical
 * e da diagonal da peça indicada pela linha e pela coluna
 * TODAS AS PEÇAS MARCADAS COM A PEÇA, NÃO SOFREM ALTERAÇÃO
 * @param int linha Linha do tabuleiro
 * @param int coluna Coluna do tabuleiro
 * @param int val Valor a ser atríbuido as peças selecionadas
 * @param array posicoes Matriz com as posições
 * @returns array Matriz alterada
 */
function setValuesMatriz(linha, coluna, val, posicoes) {
    // Define o valor para as peças na horizontal e na vertical
    for (var i = 0; i < 8; i++) {
        if (posicoes[i][coluna] != 1) {
            posicoes[i][coluna] = val;
        }
        if (posicoes[linha][i] != 1) {
            posicoes[linha][i] = val;
        }
    }
    var x = linha - 1;
    var y = coluna - 1;
    // Percorre as peças na diagonal pra parte superior esquerda
    while (x >= 0 && y >= 0) {
        if (posicoes[x][y] != 1) {
            posicoes[x][y] = val;
        }
        x--;
        y--;
    }
    // Percorre as peças na diagonal pra parte superior direita
    var x = linha - 1;
    var y = coluna + 1;
    while (x >= 0 && y < 8) {
        if (posicoes[x][y] != 1) {
            posicoes[x][y] = val;
        }
        x--;
        y++;
    }
    // Percorre as peças na diagonal pra parte inferior direita
    var x = linha + 1;
    var y = coluna + 1;
    while (x < 8 && y < 8) {
        if (posicoes[x][y] != 1) {
            posicoes[x][y] = val;
        }
        x++;
        y++;
    }
    var x = linha + 1;
    var y = coluna - 1;
    // Percorre as peças na diagonal pra parte inferior esquerda
    while (x < 8 && y >= 0) {
        if (posicoes[x][y] != 1) {
            posicoes[x][y] = val;
        }
        x++;
        y--;
    }
    return posicoes;
}