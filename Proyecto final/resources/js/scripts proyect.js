var post = function () {
    var self = this;
    self.userId = "";
    self.Id = "";
    self.title = "";
    self.Body = "";
};

var root = 'https://jsonplaceholder.typicode.com';

$(document).ready(function () {



    $.ajax({
        url: root + '/posts/',// + id,
        method: 'GET'
    }).then(function (data) {

        $.each(data, function (i, p) {
            addrow(p);
        });





        $("#buscar").click(function () {
            var id = $("#idBuscar").val();


            // console.log(data.title);
            // $("#titulo").text(data.title);
        });

    });

});


function addrow(datos) {

    // var id = document.getElementById("estudiantes").rows.length;
    // console.log(id);

    var rowDatos = '<br> <divclass="col-sm-2">'
        + '<td> <h1>"' + datos.title + '"</h1></td>'
        + '<td> <h5>' + datos.body + '</h5></td>'
        // + "<td>" + datos.nombree + "</td>"
        // + "<td>" + datos.matriculae + "</td>"
        // + "<td>" + datos.identificacione + "</td>"
        // + "<td>" + datos.telefonoe + "</td>"
        // + "<td>" + datos.emaile + "</td>"
        + " </div> </br>";

    $("#posts").append(rowDatos);

};