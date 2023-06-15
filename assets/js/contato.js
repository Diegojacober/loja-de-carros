//Ao o formulário ser enviado faz executa função
$('#contato-form').on('submit', (e) => {
    e.preventDefault();

    let data = {
        //Pega os valores digitados no email
        email: $('#inputFormEmail').val(),
        message: $('#message').val()
    }

    $.ajax({
        //Através de uma api envia um email para o dono do site
        type: 'POST',
        url: 'https://formspree.io/f/xlekqego',
        data: data,
        dataType: 'json',
        success: dados => {
            Swal.fire(
                'Mensagem enviada',
                'Sua mensagem foi enviada, entraremos em contato logo menos!',
                'success'
              )
            $('#inputFormEmail').val('')
            $('#message').val('')
        }
    })
})