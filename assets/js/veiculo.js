

    var params = window.location.search.substring(1).split('&');
    var paramArray = {};
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        paramArray[param[0]] = param[1];
    }

    //enviar id para rota da api para pegar um carro especifico
    let id = paramArray.id


    const url=`http://127.0.0.1:8000/api/v1/car/${id}`
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg4NDEyMDI1LCJpYXQiOjE2ODUzODgwMjUsInN1YiI6IjEifQ.NKRxhfDZaFJ_MjdCPaVVDqFiEtAd1Q3c3vveQSAQYnU'


    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${access_token}`
          },

        dataType: 'json',
        success: car => {
            
            var valor = (car.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
          
            $('#valor').html(valor)
            $('#name').html(car.name)
            $('#description').html(car.description)
            $('#ano').html(`<i class="fa-solid fa-calendar-days orange"></i>  ${car.ano}`)
            $('#cambio').html(car.cambio)
            $('#categoria').html(car.categoria)
            $('#logo-marca').attr('src',`../assets/imgs/${car.marca}.svg`)
            $('#btn-car').css('background-image', 'url("' + car.url_image + '")');
            $('#foto1-car').attr('src',`${car.url_image}`)
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
