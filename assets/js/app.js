//Renderiza o footer e o header assim que carregar a página
$(document).ready(function () {

  $.get("../../views/components/Menu/index.html", function (data) {
    $("header").html(data);
  });

  $.get("../../views/components/Footer/index.html", function (data) {
    $("footer").html(data);
  });
  
});

//Funções por abrir páginas
function abrirProduto(idProduto) {
  window.open(`../../views/veiculo.html?id=${idProduto}`, '_self');
}

function abrirCategoria(idCategoria) {
  window.open(`../../views/categoria.html?id=${idCategoria}`, '_self');
}

function abrirMarca(idMarca) {
  window.open(`../../views/marca.html?id=${idMarca}`, '_self');
}

//Mudar o icone do site
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

//Função responsável por abrir o carrinho
function abrirCarrinho(){
  $.get("../../views/components/Cart/index.html", function (data) {
    $("body").append(data);
    $('#modalCart').modal('show')

    showCart()
  });
}


//Função responsável por mostrar os produtos do carrinho
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

//Remove itens do carrinho
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

//Pega a posição da pessoa e salva no navegador
if (navigator.geolocation) {
  // navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  // var lat = position.coords.latitude;
  // var long = position.coords.longitude;
  navigator.geolocation.getCurrentPosition((e) => {
    console.log('Your latitude is :'+e.coords.latitude+' and longitude is '+e.coords.longitude);
    let latitude = e.coords.latitude
    let longitude = e.coords.longitude
    let url =  `https://www.google.com/maps/dir/${latitude},${longitude}/Escola+e+Faculdade+de+Tecnologia+Senai+%22Roberto+Mange%22+Rua+Pastor+Cicero+Canuto+de+Lima,+71+S%C3%A3o+Bernardo+Vila+Rialto+Campinas+-+SP,+13036-210/@-22.0960689,-47.0094211,11z/data=!4m10!4m9!1m1!4e1!1m5!1m1!1s0x94c8c8c794884427:0x15a2759628f243d1!2m2!1d-47.0681209!2d-22.9140476!5i1?entry=ttu`
    
    localStorage.setItem('@maps', url)
  });
  
} else {
  Swal.fire(
    'Localização não encontrada',
    'infelizmente não foi possível encontrar a rota mais próxima de vocÊ!',
    'warning'
  )
}

//Abre a rota em uma nova página
function rota() {
  let rota = localStorage.getItem('@maps')
  window.open(rota, '_blank')
}
