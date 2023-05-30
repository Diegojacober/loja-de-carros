$(document).ready(function () {

  $.get("../../views/components/Menu/index.html", function (data) {
    $("header").html(data);
  });

  $.get("../../views/components/Footer/index.html", function (data) {
    $("footer").html(data);
  });
  
});

function abrirProduto(idProduto) {
  window.open(`../../views/veiculo.html?id=${idProduto}`, '_blank');
}

function abrirCategoria(idCategoria) {
  window.open(`../../views/categoria.html?id=${idCategoria}`, '_blank');
}

function abrirMarca(idMarca) {
  window.open(`../../views/marca.html?id=${idMarca}`, '_blank');
}

document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
} 

//=============================================================
let carrinho = {
  itens: [],

  valorTotal:0
}

