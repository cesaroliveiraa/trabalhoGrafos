/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Arvore () {
    var raiz;
    var ponteiro;
    return {
        novaArvore: function(n) {
            raiz = n;
            ponteiro = n;
        },
        add: function(n) {
            ponteiro.filhos.push = n;
            ponteiro = n;
        },
        get : function () {
            return raiz;
        },
        empty: function () {
            return (!raiz.length > 0);
        }
    }
}

function novoNodo (col, lin) {
    var nodo = {
        coluna: col,
        linha: lin,
        filhos: []
    };
    return nodo;
} 