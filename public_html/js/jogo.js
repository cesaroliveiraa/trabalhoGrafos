var posicoes    = [0, 1, 2, 3, 4, 5, 6, 7];
    posicoes[0] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[1] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[2] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[3] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[4] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[5] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[6] = [0, 0, 0, 0, 0, 0, 0, 0];
    posicoes[7] = [0, 0, 0, 0, 0, 0, 0, 0];

function setPoint(linha, coluna) {
    if (posicoes[linha][coluna] == 0) {
        setValues(linha, coluna, 2);
        posicoes[linha][coluna] = 1;
    } else if (posicoes[linha][coluna] == 1) {
        posicoes[linha][coluna] = 0;
        setValues(linha, coluna, 0);
    }
    setLayout();
    reloadMatriz();
}

function setValues(linha, coluna, val) {
    for (var i = 0; i < 8; i++) {
        if (posicoes[i][coluna] != 1) {
            console.log("coluna:" + coluna + ' i:' + i);
            posicoes[i][coluna] = val;
        }
        if (posicoes[linha][i] != 1) {
            console.log("linha:" + linha + ' i:' + i);
            posicoes[linha][i] = val;
        }
    }
    var x = linha - 1;
    var y = coluna - 1;
    while (x >= 0 && y >= 0) {
        if (posicoes[x][y] != 1) {
            console.log("x:" + x + ' y:' + y);
            posicoes[x][y] = val;
        }
        x--;
        y--;
    }
    var x = linha + 1;
    var y = coluna + 1;
    while (x < 8 && y < 8) {
        if (posicoes[x][y] != 1) {
            console.log("x:" + x + ' y:' + y);
            posicoes[x][y] = val;
        }
        x++;
        y++;
    }
    var x = linha - 1;
    var y = coluna + 1;
    while (x >= 0 && y < 8) {
        if (posicoes[x][y] != 1) {
            console.log("x:" + x + ' y:' + y);
            posicoes[x][y] = val;
        }
        x--;
        y++;
    }
    var x = linha + 1;
    var y = coluna - 1;
    while (x < 8 && y >= 0) {
        if (posicoes[x][y] != 1) {
            console.log("x:" + x + ' y:' + y);
            posicoes[x][y] = val;
        }
        x++;
        y--;
    }
}

function setLayout() {
    $('.campo-tabuleiro').each(function(i, e) {
        var id = e.id.split('-');
        var linha = parseInt(id[1]);
        var coluna = parseInt(id[2]);
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
    if ($('.campo-rainha').length == 8) {
        alert('Parabéns! Você venceu!');
    }
}

function showSobre() {
    alert();
}

function reloadMatriz() {
    $('.campo-rainha').each(function(i, e) {
        var id = e.id.split('-');
        var linha = parseInt(id[1]);
        var coluna = parseInt(id[2]);
        posicoes[linha][coluna] = 1;
        setValues(linha, coluna, 2);
    });
    setLayout();
}