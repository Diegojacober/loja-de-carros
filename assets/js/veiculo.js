

    var params = window.location.search.substring(1).split('&');
    var paramArray = {};
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        paramArray[param[0]] = param[1];
    }

    //enviar id para rota da api para pegar um carro especifico
    var id = paramArray.id


    const url=`http://127.0.0.1:8000/api/v1/car/${id}`
    const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg4NTEyMDQ5LCJpYXQiOjE2ODU0ODgwNDksInN1YiI6IjEifQ.bVjvEIaZn-ruuq0T8QEdUeZQlDNP0TUYa4IloTZmXn4'


    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "authorization": `Bearer ${access_token}`
          },

        dataType: 'json',
        success: car => {
            document.title = `${car.name}`;
            var valor = (car.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

            $('#valor').html(valor)
            $('#name').html(car.name)
            $('#description').html(car.description)
            $('#ano').html(`<i class="fa-solid fa-calendar-days orange"></i>  ${car.ano}`)
            $('#cambio').html(car.cambio)
            $('#categoria').html(car.categoria)
            $('#logo-marca').attr('src',`../assets/imgs/${car.marca}.svg`)

            changeFavicon(`../assets/imgs/${car.marca}.svg`);
            if (car.marca_id == 4) {
                $('#logo-marca').attr('src',`../assets/imgs/land-rover.svg`)
                changeFavicon(`../assets/imgs/land-rover.svg`);
            }
            
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


$('#addCart').on('click', (e) => {
   
    let identifier = id

    let key = cart.findIndex((item) => {
        return item.identifier == identifier
    })



    if (key == -1) {
        cart.push({
        identifier,
        id: identifier,
        name:  $('#name').text(),
        description: $('#description').text(),
        value: $('#valor').text(),
        url_image: $('#foto1-car').attr('src')
        })

        localStorage.setItem('cart', JSON.stringify(cart))

        Swal.fire(
            'Carro Adicionado',
            'Carro adicionado ao carrinho com sucesso!',
            'success'
          )
    } else {
        Swal.fire(
            'Carro Adicionado',
            'Este carro já foi adicionado ao seu carrinho',
            'info'
          )
    }
})