var params = window.location.search.substring(1).split('&');
var paramArray = {};
// filtra e pega os parametros da url
for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    paramArray[param[0]] = param[1];
}

let id = paramArray.id

if (id == 1) {
   $('#categoria-titulo').html('Esportivos')
   getCars()
} else if (id == 2) {
    $('#categoria-titulo').html('Off Road')
    getCars()
}else if (id == 3 ) {
    $('#categoria-titulo').html('Blindados')
    getCars()
} else {
    $('#categoria-titulo').html('Categoria não encontrada')
}
    
        
function getCars() {
    const url=`https://diegoapi.azurewebsites.net/api/v1/categoria/${id}`
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg4NTEyMDQ5LCJpYXQiOjE2ODU0ODgwNDksInN1YiI6IjEifQ.bVjvEIaZn-ruuq0T8QEdUeZQlDNP0TUYa4IloTZmXn4'
    
    // Faz requisição a api e gera elementos na tela
    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${access_token}`
          },
    
        dataType: 'json',
        success:  data => {
    
            data.carsm.forEach(async (car) => {
    
                var preco = parseFloat(car.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                

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
                            `<span>${preco}</span>`+
                        `</div>`+
                        `<div class="icones">`+
                            `<span><img src="../assets/imgs/icongas.svg" alt="" srcset=""> ${car.combustivel}</span>`+
                            `<span><img src="../assets/imgs/iconcambio.svg" alt="" srcset=""> ${car.cambio}</span>`+
                        `</div>`+
                    `</div>`+
                    `</div>`+
                    `</div>`


                if( car.marca_id == 2) {
                    await $('#cars-bmw').append(div)
                } else if( car.marca_id == 6) {
                    await $('#cars-mercedes').append(div)
                } else if( car.marca_id == 2) {
                    await $('#cars-audi').append(div)
                } else if( car.marca_id == 1) {
                    await $('#cars-ferrari').append(div)
                } else if( car.marca_id == 3) {
                    await $('#cars-lamborghini').append(div)
                } else if( car.marca_id == 4) {
                    await $('#cars-land-rover').append(div)
                } else if( car.marca_id == 7) {
                    await $('#cars-porsche').append(div)
                } 
              });

        const $CarouselBmw = document.querySelector('.js-carousel--bmw')
        const $CarouselMercedes = document.querySelector('.js-carousel--mercedes')
        const $CarouselFerrari = document.querySelector('.js-carousel--ferrari')
        const $CarouselLamborghini = document.querySelector('.js-carousel--lamborghini')
        const $CarouselPorsche = document.querySelector('.js-carousel--porsche')
        const $CarouselAudi = document.querySelector('.js-carousel--audi')
        const $CarouselLandRover = document.querySelector('.js-carousel--land-rover')
        const $CarouselJeep = document.querySelector('.js-carousel--jeep')

        new Glider($CarouselBmw, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselMercedes, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselAudi, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselFerrari, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselJeep, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselLandRover, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselLamborghini, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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

        new Glider($CarouselPorsche, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
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
                    'Carro não encontrado',
                    'O id digitado é inexistente',
                    'error'
                  )
    
                  $('#info--carro').html('<h1>Carro não encontrado</h1>')
            }
        }
    })
}


