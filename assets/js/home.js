const url = `https://integrador2023.azurewebsites.net/api/v1/car/destaques`
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg4NTEyMDQ5LCJpYXQiOjE2ODU0ODgwNDksInN1YiI6IjEifQ.bVjvEIaZn-ruuq0T8QEdUeZQlDNP0TUYa4IloTZmXn4'

$.ajax({
    type: 'GET',
    url: url,
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": `Bearer ${access_token}`
      },

    dataType: 'json',
    success:  data => { 

        data.forEach(car => {
            var valor = (car.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
            div = `<div class="c-carousel__slide">`+
            `<div class="produto" data-id-carro="${car.id}" onclick="abrirProduto(${car.id})">`+
            `<div class="head--produto">`+
                `<img src="${car.url_image}" alt="${car.name.toUpperCase()}" class="img--produto">`+
            `</div>`+
            `<div class="footer-produto">`+
                `<div class="nome--ano">`+
                    `<p>${car.name}</p>`+
                    `<span><i class="fa-solid fa-calendar-days orange"></i> ${car.ano}</span>`+
                ` </div>`+
                `<div class="valor--produto">`+
                    `<span>${valor}</span>`+
                `</div>`+
                `<div class="icones">`+
                    `<span><img src="./assets/imgs/icongas.svg" alt="" srcset=""> ${car.combustivel}</span>`+
                    `<span><img src="./assets/imgs/iconcambio.svg" alt="" srcset=""> ${car.cambio}</span>`+
                `</div>`+
            `</div>`+
            `</div>`+
            `</div>`
            
            document.getElementById('carros-destaques').innerHTML += div
        });

        const $CarouselDestaques = document.querySelector('.js-carousel--destaques')
        const $CarouselMarcas = document.querySelector('.js-carousel--marcas')
        const $CarouselBreve = document.querySelector('.js-carousel--breve')

        new Glider($CarouselDestaques, {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: ".js-carousel--destaques-dots",
            draggable: true,
            arrows: {
                prev: ".js-carousel--destaques-prev",
                next: ".js-carousel--destaques-next",
            },
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

        new Glider($CarouselMarcas, {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: ".js-carousel--marcas-dots",
            draggable: true,
            arrows: {
                prev: ".js-carousel--marcas-prev",
                next: ".js-carousel--marcas-next",
            },
            responsive: [{
                breakpoint: 675,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 950,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                } 
            },
            {
                breakpoint: 1410,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                } 
            }]
        })

        new Glider($CarouselBreve, {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: ".js-carousel--breve-dots",
            draggable: true,
            arrows: {
                prev: ".js-carousel--breve-prev",
                next: ".js-carousel--breve-next",
            },
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
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


$('.produto-breve').on('click', () => {
    Swal.fire(
        'Carro indisponível',
        'Esse carro ainda não está disponivel na nossa loja, podemos te avisar quando chegar!',
        'info'
      )
})
