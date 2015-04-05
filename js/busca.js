// Variável que conta o número de passos feitos na busca
var cont = 0;

/**
 * Prepara o tabuleiro para o resultado obtido
 * @return void
 */
function exibicaoResultado() {
	// Gera uma nova árvore
    var tabuleiro = novaArvore();
	// Busca pela solução
    var solucao = DLS(tabuleiro, 7);
	// Encontrou uma solução
	if (solucao) {
		var pontos = extraiPontosSolucao(solucao);

		// Marca os pontos a cada 2 segundos
		var x = 0;
		setInterval(function() {
			if (typeof(pontos[x]) == 'undefined') {
				clearTimeout();
				return false;
			}
			// Inválida as peças conforme a peça selecionada
			setValues(pontos[x][0], pontos[x][1], 2);
			// Marca a posição com a peça
			posicoes[pontos[x][0]][pontos[x][1]] = 1;
			setLayout();
			x++;
		}, 2000);

		// Exibe o número de passos utilizados
        document.getElementById('estatistica').style.display = 'inline-block';
        document.getElementById('estatistica-passos').innerText = cont;
	} else {
		alert("Não foi possível encontrar uma solução atráves desse ponto");
	}
}

/**
 * Método de busca em profundidade limitada
 * @param object node Nodo atual da recursividade
 * @param int num Número de profundidade atingida
 * @return object Último objeto da fila
 */
function DLS(node, num) {
	// Calcula o número de passos feitos
	cont++;
	// Caso ele atinja oa profundidade de 8 filhos, ele retorna o nodo
    if (num > 0) {
        for (x in node.filhos) {
			// ATENÇÃO! USO DE RECURSIVIDADE!
            var n = DLS(node.filhos[x], num - 1);
			if (n) {
				return n;
			}
        }
		return false;
    } else {
        return node;
    }
}

/**
 * Inicia a busca em profundidade
 * @return void
 */
function buscaCega() {
	resetGame();
	exibicaoResultado();
}

/**
 * Retira todos os pontos da fila dos objetos da solução
 * @param object solucao Último objeto da fila
 * @return array Pontos a serem marcados
 */
function extraiPontosSolucao(solucao) {
	var pontos = new Array();
	// Ponto final
	pontos.push([solucao.linha, solucao.coluna]);
	// Pontos antériores
	var nodo = solucao;
	for (var i = 0; i < 7; i++) {
		// Verifica se é ponto raiz
		if (typeof(nodo.pai) == 'undefined') {
			var nodo = nodo.getPai();
		} else {
			var nodo = nodo.pai;
		}
		// Insere no início do array, mantendo a ordem correta
		pontos.unshift([nodo.linha, nodo.coluna]);
	}
	return pontos;
}
