function cargarDatosUsuario() {
    var root = 'https://jsonplaceholder.typicode.com';

    var urlParams = new URLSearchParams(window.location.search);
    var idUsuario = urlParams.get('id');    // alert("hola " + idUsuario);

    $.ajax({
        url: root + '/users/' + idUsuario,
        method: 'GET'
    }).then(function (data) {        // console.log(data);
        var userData =

            '<div class="row">' +
            '   <div class="col-md-12">' +
            '       <h2>Detalles de usuario</h2>' +
            '   </div>' +
            '</div>' +

            '<div class="row">' +
            '   <div class="col-md-2">' +
            '       <h3>Nombre :</h3>' +
            '   </div>' +

            '   <div class="col-md-3">' +
            '       <h3>' + data.name + '</h3>' +
            '   </div>' +
            '</div>' +

            '<div class="row">' +
            '     <div class="col-md-2">' +
            '          <h3>E-mail :</h3>' +
            '     </div>' +

            '      <div class="col-md-3">' +
            '          <h3>' + data.email + '</h3>' +
            '      </div>' +
            '</div>' +

            '<div class="row">' +
            '       <div class="col-md-2">' +
            '           <h3>Compa' + ('&ntilde') + 'ia :</h3>' +
            '       </div>' +

            '       <div class="col-md-3">' +
            '           <h3>' + data.company.name + '</h3>' +
            '       </div>' +
            '</div>' +

            '<div class="row">' +
            '       <div class="col-md-2">' +
            '          <h3>Sitio WEB :</h3>' +
            '       </div>' +

            '       <div class="col-md-3">' +
            '           <h3>' + data.website + '</h3>' +
            '       </div>' +
            '</div>';

        $("#userData").append(userData);
    });
};

$(document).ready(function () {
    cargarDatosUsuario();
});