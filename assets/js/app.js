$(document).ready(function () {

  $.get("../../views/components/Menu/index.html", function (data) {
    $("header").html(data);
  });

  $.get("../../views/components/Footer/index.html", function (data) {
    $("footer").html(data);
  });
  
});

function abrirProduto(idProduto) {
  window.open(`../../views/veiculo.html?id=${idProduto}`, '_self');
}

function abrirCategoria(idCategoria) {
  window.open(`../../views/categoria.html?id=${idCategoria}`, '_self');
}

function abrirMarca(idMarca) {
  window.open(`../../views/marca.html?id=${idMarca}`, '_self');
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


function abrirCarrinho(){
  $.get("../../views/components/Cart/index.html", function (data) {
    $("body").append(data);
    $('#modalCart').modal('show')

    showCart()
  });
}
//=============================================================
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 

function showCart(cartP = cart) {
  
  $('#lista-produtos').empty()
  cartP.map(item => {
    let div = `<div class="product-card">`+
    `<div class="image-product">`+
      `<img src="${item.url_image}" alt="">`+
    `</div>`+
    `<div class="product-data">`+
      `<p class="product-title">${item.name}</p>`+
      `<span class="product-description">${item.description}</span>`+
      `<p class="product-value">${item.value}</p>`+
      
    `</div>`+
    `<div class="icons-product">`+
      `<a href="#" class="remove-product" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash-can orange"></i></a>`+
    `</div>`+
  `</div>`

  
  $('#lista-produtos').append(div)
  })
}


function removeFromCart(index) {
  
  cart.forEach(element => {
    if (element.identifier == index) {
      let cartC = cart.filter((e) => e.identifier != index) ? cart.filter((e) => e.identifier != index) : [] 
      
      localStorage.setItem('cart', JSON.stringify(cartC))
      
      showCart(cartC)
    }
  });

  cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 
  
}

