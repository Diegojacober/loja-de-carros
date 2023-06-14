var params = window.location.search.substring(1).split('&');
var paramArray = {};
for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    paramArray[param[0]] = param[1];
}

let id = paramArray.id

// Filtra os parametros recebidos na url
if (id == 1) {
   $('#titulo-marca').html('Ferrari')
   getCars()
} else if (id == 2) {
    $('#titulo-marca').html('BMW')
   getCars()
}else if (id == 3 ) {
    $('#titulo-marca').html('Lamborghini')
    getCars()
} else if (id == 4 ) {
    $('#titulo-marca').html('Land Rover')
    getCars()
} else if (id == 5 ) {
    $('#titulo-marca').html('Jeep')
    getCars()
} else if (id == 6 ) {
    $('#titulo-marca').html('Mercedes')
    getCars()
} else if (id == 7 ) {
    $('#titulo-marca').html('Porsche')
    getCars()
} else if (id == 8 ) {
    $('#titulo-marca').html('Audi')
    getCars()
}  else {
    $('#titulo-marca').html('Marca não encontrada')
    $('#logo-marca-selecionada').attr('src',``)
    Swal.fire(
        'Marca não encontrada',
        'O id digitado é inexistente',
        'error'
      )
}
    
        
function getCars() {
    const url=`https://diegoapi.azurewebsites.net/api/v1/marca/${id}`
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg4NTEyMDQ5LCJpYXQiOjE2ODU0ODgwNDksInN1YiI6IjEifQ.bVjvEIaZn-ruuq0T8QEdUeZQlDNP0TUYa4IloTZmXn4'
    
    // busca dados na api os consume e gera elementos na tela
    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${access_token}`
          },
    
        dataType: 'json',
        success:  data => {
            document.title = `Carros da ${data.nome}`;
            changeFavicon(`../assets/imgs/${data.nome}.svg`);
            $('#logo-marca-selecionada').attr('src',`../assets/imgs/${data.nome}.svg`)
            if (data.nome == 'Land Rover') {
                $('#logo-marca-selecionada').attr('src',`../assets/imgs/land-rover.svg`)
                changeFavicon(`../assets/imgs/land-rover.svg`);
            }
            $('#logo-marca-selecionada').attr('alt',`Logo da marca: ${data.nome}`)

            
            data.cars.forEach(async (car) => {
                
                
                var valor = parseFloat(car.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    

                div = `<div class="c-carousel__slide">`+
                    `<div class="produto" onclick="abrirProduto(${car.id})">`+
                    `<div class="head--produto">`+
                        `<img src="${car.url_image}" alt="" class="img--produto">`+
                    `</div>`+
                    `<div class="footer-produto">`+
                        `<div class="nome--ano">`+
                            `<p>${car.name}</p>`+
                            `<span><i class="fa-solid fa-calendar-days orange"></i> 2023</span>`+
                        ` </div>`+
                        `<div class="valor--produto">`+
                            `<span>${valor}</span>`+
                        `</div>`+
                        `<div class="icones">`+
                            `<span><img src="../assets/imgs/icongas.svg" alt="" srcset=""> ${car.combustivel}</span>`+
                            `<span><img src="../assets/imgs/iconcambio.svg" alt="" srcset=""> ${car.cambio}</span>`+
                        `</div>`+
                    `</div>`+
                    `</div>`+
                    `</div>`


                if( car.categoria_id == 1) {
                    await $('#carrros-eportivos').append(div)
                } else if( car.categoria_id == 2) {
                    await $('#carros-off-road').append(div)
                } else if( car.categoria_id == 3) {
                    await $('#carros-blindados').append(div)
                } 
              });


              //Configrações necessárias para os carrousels
              const $CarouselOffRoad = document.querySelector('.js-carousel--off-road')
              const $CarouselEsportivos = document.querySelector('.js-carousel--esportivos')
              const $CarouselBlindados = document.querySelector('.js-carousel--blindados')
      
              new Glider($CarouselOffRoad, {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: ".js-carousel--off-road-dots",
                  draggable: true,
                  arrows: {
                      prev: ".js-carousel--off-road-prev",
                      next: ".js-carousel--off-road-next",
                  },
                  //scrollLock: true,
                  responsive: [{
                      breakpoint: 675,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      }
                  }, {
                      breakpoint: 950,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                      } 
                  },
                  {
                      breakpoint: 1410,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 5,
                      } 
                  }]
              })
      
              new Glider($CarouselEsportivos, {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: ".js-carousel--off-road-dots",
                  draggable: true,
                  arrows: {
                      prev: ".js-carousel--off-road-prev",
                      next: ".js-carousel--off-road-next",
                  },
                  //scrollLock: true,
                  responsive: [{
                      breakpoint: 675,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      }
                  }, {
                      breakpoint: 950,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                      } 
                  },
                  {
                      breakpoint: 1410,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 5,
                      } 
                  }]
              })
      
              new Glider($CarouselBlindados, {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: ".js-carousel--off-road-dots",
                  draggable: true,
                  arrows: {
                      prev: ".js-carousel--off-road-prev",
                      next: ".js-carousel--off-road-next",
                  },
                  //scrollLock: true,
                  responsive: [{
                      breakpoint: 675,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 2,
                      }
                  }, {
                      breakpoint: 950,
                      settings: {
                          slidesToShow: 3,
                          slidesToScroll: 3,
                      } 
                  },
                  {
                      breakpoint: 1410,
                      settings: {
                          slidesToShow: 5,
                          slidesToScroll: 5,
                      } 
                  }]
              })
        },
        error: e => {
            if (e.status == 404) {
                Swal.fire(
                    'Marca não encontrada',
                    'O id digitado é inexistente',
                    'error'
                  )
            }
        }
    })
}


