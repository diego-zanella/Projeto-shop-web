fetch("php/listar-produtos.php", {
    method: "GET"
}).then(async(resposta) => {
    let dados = await resposta.json();
    listarProdutos(dados);
    console.log(dados);
});

function criaListaConteudo(dados, category,i){
    let conteudo = "";
    conteudo += '<div class="flex-items">';
    conteudo += '<img src="images/'+dados[i].ImagePath+'" width="184" height="276">';
    conteudo += '<br>';
    conteudo += '<div class="preco">'+dados[i].Name+'</div>';
    conteudo += '<br>';
    conteudo += '<div class="preco">R$'+dados[i].Price+'</div>';

    conteudo += '<form id="form-carrinho">';
    conteudo += '<input type="hidden" value="'+ dados[i].Id + '" name="id-produto" id="id-produto"/>';
    conteudo += '<br> <button type="button" class="botao-compra" onclick="comprar(' + dados[i].Id + ')" class="botao"><img class="compra" src="images/botao.png" width="184"></button>';
    conteudo += '</form>';
    // conteudo += '<br> <img class="compra" src="images/botao.png" width="184">';
    conteudo += '</div>';

    document.getElementById(category).innerHTML += conteudo;
    console.log(conteudo);
    return conteudo;
}

//dados é a lista de produtos
function listarProdutos(dados){
    let categories = ["CASACOS"]
        categories.forEach(element => {
            for(let i=0; i < dados.length; i++){
                if(dados[i].Category == element){
                    criaListaConteudo(dados,element,i);
                    console.log(dados[i].Category, dados[i], dados)
                }
            }
        });
}

function comprar(item){

    alert("Item adicionado ao carrinho")

    document.getElementById("id-produto").value = item;

    var form = document.getElementById("form-carrinho");
    var dados = new FormData(form);
    
    fetch("php/adiciona-carrinho.php", {
        method: "POST",
        body: dados
    })
}