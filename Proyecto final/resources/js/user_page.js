function cargarDatosUsuario() {
    var root = 'https://jsonplaceholder.typicode.com';

    var urlParams = new URLSearchParams(window.location.search);
    var idUsuario = urlParams.get('id');    // alert("hola " + idUsuario);
    var num = 0;

    $.ajax({
        url: root + '/users/' + idUsuario,
        method: 'GET'
    }).then(function (data) {        // console.log(data);

        $.ajax({
            url: root + '/posts/?userId=' + idUsuario,
            method: 'GET'
        }).then(function (data) {
            $.each(data, function (i, usuario) {
                num++;
            });
            var postsCount = '<h4>Cantidad de posts : ' + num + '</h4>';
            $("#userCountCcomments").append(postsCount);
        });

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