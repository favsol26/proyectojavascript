// buscar los post mediante jquery AJAX

$(document).ready(function () {

    cargarPost();
});

function cargarPost() {
    var root = 'https://jsonplaceholder.typicode.com';

    var usuarios = {};

    var userAjax = $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function (data) {
        $.each(data, function (i, usuario) {
            usuarios[usuario.id] = usuario;
        });
    });

    userAjax.then(function () {

        $.ajax({
            url: root + '/posts',
            method: 'GET'
        }).then(function (data) {

            var myLocalStorage = window.localStorage;
            var postFavoritos = {};
            var dbPostFavoritos = myLocalStorage.getItem('postFavoritos');

            if (dbPostFavoritos != null) {
                postFavoritos = JSON.parse(dbPostFavoritos);
            }

            // recorrer el arreglo de los post
            $.each(data, function (i, p) {
                var existe = p.id in postFavoritos;
                var post =
                    '<div class="row">' +
                    '   <div class="col-md-10">' +
                    '      <a id="redir" class ="post_title" data-post-id=' + p.id + '  >' +
                    '       <h3>' + p.title + '</h3>' +
                    '      </a>' +
                    '   </div>' +
                    '</div>' +

                    '<div class="row">' +
                    '   <div href="#" class="col-md-10 user_info"  data-user-id=' + p.userId + '>' +
                    '       <a class="publicador">' +
                    '           <span class="glyphicon glyphicon-user ">' +
                    usuarios[p.userId].name + " - " + usuarios[p.userId].email +
                    '         </span>' +
                    '       </a >' +
                    '   </div>' +

                    '   <div class="col-md-2">' +
                    '       <button class="btn glyphicon '
                    + (existe ? 'glyphicon-star' : 'glyphicon-star-empty') +
                    ' post_boton" data-post-id=' + p.id + '/>' +
                    '   </div>' +

                    '</div>' +

                    ' <div class="row">' +
                    '       <div class="col-md-12">' +
                    '                 <p>' + p.body + '</p>' +
                    '        </div>' +
                    '   </div>';

                $("#post").append(post);
            });



            $('.post_boton').click(function () {
                // alert("hola " + $(this).data('post-id'));
                var postId = $(this).data("post-id")
                var existe = agregarFavorito(postId);

                $(this).removeClass(existe ? 'glyphicon-star-empty' : 'glyphicon-star');
                $(this).addClass(existe ? 'glyphicon-star' : 'glyphicon-star-empty');

                // if (existe) {
                //     $(this).removeClass('glyphicon-star-empty');
                //     $(this).addClass('glyphicon-star');
                // } else {
                //     $(this).removeClass('glyphicon-star');
                //     $(this).addClass('glyphicon-star-empty');
                // }

            });

            $('.post_title').click(function () {
                event.preventDefault();
                var postId = $(this).data("post-id");

                // alert(postId);
                window.location = "post_page.html?id=" + postId;
            });

            // espacio para el evento de la llamada de la vista de los detalles de los usuarios
            $('.user_info').click(function () {
                event.preventDefault();
                var userId = $(this).data("user-id");

                // alert(userId);
                window.location = "user_page.html?id=" + userId;
            });
        });

    });
};

function agregarFavorito(postId) {
    var myLocalStorage = window.localStorage;
    var postFavoritos = {};
    var dbPostFavoritos = myLocalStorage.getItem('postFavoritos');

    if (dbPostFavoritos != null) {
        postFavoritos = JSON.parse(dbPostFavoritos);
    }

    var existe = false;

    if (postId in postFavoritos) {
        delete postFavoritos[postId];
    } else {
        existe = true;
        postFavoritos[postId] = true;
    }
    localStorage.setItem('postFavoritos', JSON.stringify(postFavoritos));
    return existe;
}
