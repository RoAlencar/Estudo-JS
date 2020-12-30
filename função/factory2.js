function criarProduto(nome, preco) {
    return {
       nome,
       preco,
       desconto: 0.1

    }
}

console.log(criarProduto('Camisa','R$: 29.90'))
console.log(criarProduto('Camiseta','R$: 19.90'))