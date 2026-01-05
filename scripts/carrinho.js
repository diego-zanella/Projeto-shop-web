fetch("php/carrinho.php", {
    method: "GET",
}).then(async(resposta) => {
    let dados = await resposta.json();
    console.log(dados);
    listarCarrinho(dados);
    calcularValor(dados);
})


function listarCarrinho(dados){
    let conteudo = "";
    conteudo +='<ul>';
    for(let i=0; i < dados.length; i++){

        conteudo += '<li>'+dados[i].Quantity +'x &nbsp '+ dados[i].Name+ '   |   '+dados[i].Price;
        conteudo += '<form id="form-carrinho">';
        conteudo += '<div class="remover"><img onclick="removerCarrinho('+ dados[i].Id + ')" src="images/delete.png" height="25px"></div>';
        conteudo += '<input type="hidden" value="'+ dados[i].Id_produto + '" name="id-produto" id="id-produto"/>';
        conteudo += '</form>';
        conteudo += '<form id="form-checkout">';
        conteudo += '<input type="hidden" value="2" name="valorTotalInput" id="valorTotalInput"/>'
        conteudo += '</form>';

        conteudo += '</li>';
    }
    conteudo += '</ul>';
    conteudo += '<div id="valor-total"></div>';
    let valorTotal = calcularValorRetorna(dados);

    conteudo += '<div class="conf_compra"><img onclick="checkout(' + valorTotal + ')" src="images/checkout.png" height="50px"></div>';
    

    document.getElementById("lista-carrinho").innerHTML += conteudo;
}

function checkout(valorTotal){
    console.log(valorTotal);

    document.getElementById("valorTotalInput").value = valorTotal;

    var form = document.getElementById("form-checkout");

    var dados = new FormData(form);
    console.log(valorTotal);
    console.log(dados["valorTotalInput"]);

    alert("valor total a pagar: " + valorTotal);

    fetch("php/checkout.php", {
        method: "POST",
        body: dados
    });
    window.location.href="finalizar_compra.html";

    // nao envia para o banco por algum motivo

}

function removerCarrinho(item){

    document.getElementById("id-produto").value = item;

    var form = document.getElementById("form-carrinho");
    var dados = new FormData(form);
    
    fetch("php/remover-carrinho.php", {
        method: "POST",
        body: dados
    })
    window.location.href="carrinho.html";
}

function calcularValorRetorna(dados){
    var valorTotal = 0;

    for(var i=0; i < dados.length; i++){

        valorTotal += (dados[i].Price * dados[i].Quantity);

    }
    return valorTotal;
}

function calcularValor(dados){
    let valorTotal = calcularValorRetorna(dados);
    document.getElementById("valor-total").innerHTML += "TOTAL: " + valorTotal.toFixed(2);
}

