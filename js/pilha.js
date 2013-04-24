/**
 * Classe que cria uma estrutura de dados Pilha
 */
function Pilha () {
    var dados = new Array();
    return {
        // adiciona um valor no final da pilha
        add : function (valor) {
            dados.push(valor);
        },
        // remove o ultimo dado da pilha
        remove : function () {
            dados.pop();
        },
        // retorna a pilha
        get : function () {
            return dados;
        },
        // verifica se a pilha esta vazia
        empty: function () {
            return (!dados.length > 0);
        }
    }
}


