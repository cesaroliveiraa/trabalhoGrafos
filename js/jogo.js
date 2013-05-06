/*
 * Posições do tabuleiro indicada pelo tabuleiro,
 * no qual é indicado pelo seu indice o valor da linha
 * e depois as colunas
 */
var posicoes    = [0, 1, 2, 3, 4, 5, 6, 7];
    posicoes[0] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[1] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[2] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[3] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[4] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[5] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[6] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[7] = [0, 0, 0, 0, 0, 0, 0, 0];

// Váriavel que verifica se o usuário venceu o jogo
var venceu = false;

/**
 * Coloca ou remove a peça da posição indicada no tabuleiro
 * @param int linha Linha do tabuleiro
 * @param int coluna Coluna do tabuleiro
 * @returns void
 */
function setPoint(linha, coluna) {
    // Verifica se a coluna esta marcada ou não
    if (posicoes[linha][coluna] == 0) {
        // Inválida as peças conforme a peça selecionada
        setValues(linha, coluna, 2);
        // Marca a posição com a peça
        posicoes[linha][coluna] = 1;
    } else if (posicoes[linha][coluna] == 1) {
        posicoes[linha][coluna] = 0;
        // Retira a peça do tabuleiro e
        // redefine os espaços que eram bloquiados pelo espaço
        setValues(linha, coluna, 0);
    }
    // Seta o layout dos status do tabuleiro
    setLayout();
    // Redefine todos os espaços do tabuleiro
    reloadMatriz();
}

/**
 * Percorre todos as peças na horizontal, vertical
 * e da diagonal da peça indicada pela linha e pela coluna
 * TODAS AS PEÇAS MARCADAS COM A PEÇA, NÃO SOFREM ALTERAÇÃO
 * @param int linha Linha do tabuleiro
 * @param int coluna Coluna do tabuleiro
 * @param int val Valor a ser atríbuido as peças selecionadas
 * @returns void
 */
function setValues(linha, coluna, val) {
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
}

/**
 * Define o layout conforme o status do espaço
 * 0 para os espaços sem marcação e com permissão de serem marcadas
 * 1 para os espaços marcadas
 * 2 para os espaços impossibilitas a serem marcadas
 * @returns void
 */
function setLayout() {
    // Percorre todas os espaços do tabuleiro
    $('.campo-tabuleiro').each(function(i, e) {
        // Busca a linha e coluna do espaço indicada no id
        var id = e.id.split('-');
        var linha = parseInt(id[1]);
        var coluna = parseInt(id[2]);
        // Verifica o status do espaço e
        // faz a atribuição necessária do layout no espaço
        if (posicoes[linha][coluna] == 0) {
            $(e).removeClass('campo-rainha');
            $(e).removeClass('campo-close');
        } else if (posicoes[linha][coluna] == 1) {
            $(e).addClass('campo-rainha');
            $(e).removeClass('campo-close');
        } else {
            $(e).addClass('campo-close');
            $(e).removeClass('campo-rainha');
        }
    });
    // Faz a verificação se o usuário conseguiu vencer o jogo
    if (!venceu) verificaVenceu();
}

/**
 * Verifica se o usuário venceu o jogo
 * @return void
 */
function verificaVenceu() {
    if ($('.campo-rainha').length >= 8) {
        alert('Parabéns! Você venceu!');
        venceu = true;
    }
}

/**
 * Mostra um alerta com os dados da equipe
 * @return void
 */
function showSobre() {
    alert("Trabalho de Grafos\nSistemas de Informação PUC-MG São Gabriel\nDesenvolvedores: César Oliveira e Phellipe Gonzaga\nDocumentação: Marcelo Prado, Wanderson Pinheiro, Karen Danielle");
}

/**
 * Redefine todos os espaços do tabuleiro
 * @return void
 */
function reloadMatriz() {
    // Percorre todos os espaços marcados
    $('.campo-rainha').each(function(i, e) {
        // Pega a linha e a coluna pelo id
        var id = e.id.split('-');
        var linha = parseInt(id[1]);
        var coluna = parseInt(id[2]);
        // Seta o valor como marcado e redefine o tabuleiro
        posicoes[linha][coluna] = 1;
        setValues(linha, coluna, 2);
    });
    // Seta o layout dos espaçoes
    setLayout();
}

/**
 * Reeinicia o jogo zerando todo o tabuleiro e aplicando o layout
 * @returns void
 */
function resetGame() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            posicoes[i][j] = 0;
        }
    }
    setLayout();
	$('#estatistica label').html('');
	$('#estatistica').hide();
    venceu = false;
}