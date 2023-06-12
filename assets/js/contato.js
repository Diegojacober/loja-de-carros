$('#contato-form').on('submit', (e) => {
    e.preventDefault();

    let data = {
        email: $('#inputFormEmail').val(),
        message: $('#message').val()
    }

    $.ajax({
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