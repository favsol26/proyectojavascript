function cargarPost() {
    var root = 'https://jsonplaceholder.typicode.com';

    var urlParams = new URLSearchParams(window.location.search);
    var idPost = urlParams.get('id');
    var usuarios = {};

    // alert(idPost);

    var usersAjax = $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function (data) {
        $.each(data, function (i, usuario) {
            usuarios[usuario.id] = usuario;
        });
    });

    usersAjax.then(function () {

        $.ajax({
            url: root + '/posts/' + idPost,
            method: 'GET'
        }).then(function (post1) {
            // console.log(post1.userId);

            var post =
                '<div class="row">' +
                '   <div class="col-md-10">' +
                '      <a id="redir"  >' +//href="#" class ="post_title" data-post-id=' + post1.id + ' 
                '       <h3>' + post1.title + '</h3>' +
                '      </a>' +
                '   </div>' +
                '</div>' +

                '<div class="row">' +
                '   <div class="col-md-10">' +
                '       <a class="publicador">' +
                '           <span class="glyphicon glyphicon-user">' +
                usuarios[post1.userId].name + " - " + usuarios[post1.userId].email +
                '         </span>' +
                '       </a >' +
                '   </div>' +
                '</div>' +

                ' <div class="row">' +
                '       <div class="col-md-12">' +
                '                 <p>' + post1.body + '</p>' +
                '        </div>' +
                '   </div>';
            $("#post").append(post);

            $.ajax({
                url: root + '/posts/' + idPost + '/comments',
                method: 'GET'
            }).then(function (data) {
                // console.log(data);
                // recorrer los comentarios del posts
                $.each(data, function (i, p) {
                    var post =
                        '<div class="row">' +
                        '   <div class="col-md-10">' +
                        // '      <a id="redir" class ="post_title" data-post-id=' + p.id + '  >' +
                        '       <h4>' + p.name + '</h4>' +
                        // '      </a>' +
                        '   </div>' +
                        '</div>' +

                        '<div class="row">' +
                        '   <div class="col-md-10">' +
                        '       <a class="publicador">' +
                        '           <span class="glyphicon glyphicon-user">' +
                        p.email +
                        '         </span>' +
                        '       </a >' +
                        '   </div>' +

                        // '   <div class="col-md-2">' +
                        // '       <button class="btn glyphicon '
                        // + (existe ? 'glyphicon-star' : 'glyphicon-star-empty') + ' post_boton" data-post-id=' + p.id + '/>' +
                        // '   </div>' +

                        '</div>' +

                        ' <div class="row">' +
                        '       <div class="col-md-12">' +
                        '                 <p>' + p.body + '</p>' +
                        '        </div>' +
                        '   </div>';

                    $("#post_comment").append(post);
                });
            });

        });

    });

};

$(document).ready(function () {
    cargarPost();
});