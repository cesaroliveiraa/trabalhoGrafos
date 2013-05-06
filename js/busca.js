function iniciarBuscaProfundidadeLimitada() {
    var tabuleiro = novaArvore();
    var solucao = DLS(tabuleiro, 7);
    console.log("Solucao:");
    console.log(solucao);
//    return solucao;
}

function DLS(node, num) {
    console.log(num);
    if (num > 0) {
        for (x in node.filhos) {
            DLS(node.filhos[x], num - 1);
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    } else {
        return node;
    }
}
