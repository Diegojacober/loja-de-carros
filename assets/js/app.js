$(document).ready(function () {

  $.get("../../views/components/Menu/index.html", function (data) {
    $("header").html(data);
  });

  $.get("../../views/components/Footer/index.html", function (data) {
    $("footer").html(data);
  });

  });


let carrinho = {
  itens: [],

  valorTotal:0
}

  console.log(produtos)
  produtos.forEach(produto => {
    console.log(produto)
    div = `<div class="c-carousel__slide">`+
    `<div class="produto">`+
    `<div class="head--produto">`+
        `<img src="${produto.url_imagem}" alt="" class="img--produto">`+
    `</div>`+
    `<div class="footer-produto">`+
        `<div class="nome--ano">`+
            `<p>${produto.nome}</p>`+
            `<span><i class="fa-solid fa-calendar-days orange"></i> 2023</span>`+
        ` </div>`+
        `<div class="valor--produto">`+
            `<span>${produto.valor}</span>`+
        `</div>`+
        `<div class="icones">`+
            `<span><img src="./assets/imgs/icongas.svg" alt="" srcset=""> Gasolina</span>`+
            `<span><img src="./assets/imgs/iconcambio.svg" alt="" srcset=""> Automático</span>`+
        `</div>`+
    `</div>`+
    `</div>`+
    `</div>`
    document.getElementById('carros-destaques').innerHTML += div
 

});
