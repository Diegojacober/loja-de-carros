$(document).ready(function () {

  $.get("../../views/components/Menu/index.html", function (data) {
    $("header").html(data);
  });

  $.get("../../views/components/Footer/index.html", function (data) {
    $("footer").html(data);
  });
  
});

//=============================================================
let carrinho = {
  itens: [],

  valorTotal:0
}

function abrirProduto(idProduto) {
  window.open(`../../views/veiculo.html?id=${idProduto}`, '_blank');
}


produtos.forEach(produto => {
  div = `<div class="c-carousel__slide">`+
  `<div class="produto" data-id-carro="${produto.id}" onclick="abrirProduto(${produto.id})">`+
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
          `<span><img src="./assets/imgs/icongas.svg" alt="" srcset=""> ${produto.combustivel}</span>`+
          `<span><img src="./assets/imgs/iconcambio.svg" alt="" srcset=""> ${produto.cambio}</span>`+
      `</div>`+
  `</div>`+
  `</div>`+
  `</div>`
  
  document.getElementById('carros-destaques').innerHTML += div

});