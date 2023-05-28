$(document).ready(function () {

    var params = window.location.search.substring(1).split('&');
    var paramArray = {};
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        paramArray[param[0]] = param[1];
    }

    //enviar id para rota da api para pegar um carro especifico    
})