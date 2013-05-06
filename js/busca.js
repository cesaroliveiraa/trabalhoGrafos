function iniciarBuscaProfundidadeLimitada() {
    var tabuleiro = novaArvore();
    var solucao = DLS(tabuleiro, 7);
	if (solucao) {
		return solucao;
	} else {
		return false;
	}
}

function DLS(node, num) {
    if (num > 0) {
        for (x in node.filhos) {
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
