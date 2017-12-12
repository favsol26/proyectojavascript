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
        url: root + '/posts',
        method: 'GET'
    }).then(function (data) {

        $.each(data, function (i, p) {
            addPosts(p);
        });
    });
});

function addPosts(datos) {

    var rowDatos = '<div class="col-sm-8"> '
        + '<br>'
        + '<td> <h1>"' + datos.title + '"</h1> </td>'
        + '<td> <h5>' + datos.body + '</h5>  </td>'
        + " </br>"
        + " </div>";

    $("#posts").append(rowDatos);
    // bordercolor: #aaaaaaa; border-style: solid; border-width: 1px;
};