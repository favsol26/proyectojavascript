var Estudiante = function () {
  var self = this;
  self.ide = "";
  self.nombree = "";
  self.matriculae = "";
  self.identificacione = "";
  self.telefonoe = "";
  self.emaile = "";
};
$(document).ready(function () {

  myStorage = window.localStorage;
  var dbEstudiantes = myStorage.getItem("Estudiantes");

  if (dbEstudiantes != null) {
    var Estudiantes = JSON.parse(dbEstudiantes);
    $.each(Estudiantes, function (i, est) {
      addrow(est);
    });
  }

  $("#addEst").click(function () { // alert("HOLA!!!");
    var id = $("#IdEst").val();
    var nombre = $("#nombreEst").val();
    var matricula = $("#matriculaEst").val();
    var identificacion = $("#identificacionEst").val();
    var telefono = $("#telefonoEst").val();
    var email = $("#emailEst").val();
    var est1 = new Estudiante();
    est1.ide = id;
    est1.nombree = nombre;
    est1.matriculae = matricula;
    est1.identificacione = identificacion;
    est1.telefonoe = telefono;
    est1.emaile = email;
    addrow(est1);// alert(JSON.stringify(est1));
    guardardb(est1);
  });

  $("#delEst").click(function () {
    var con = 0;
    var f1 = [];

    $("input:checkbox:checked").each(function () {
      f1[con] = $(this).attr("id");
      con++;
    });

    if (con >= 1) {
      $.each(f1, function (i, est) {
        eliminarEstudiante(est - i);
      });
      location.reload();
    } else {
      alert("debe elegir al menos 1");
    }

  });
});
function addrow(datos) {

  var id = document.getElementById("estudiantes").rows.length;
  console.log(id);
  var rowDatos = "<tr>"
    + '<td> <input type="checkbox" id ="' + id + '"></td>'
    + "<td>" + datos.ide + "</td>"
    + "<td>" + datos.nombree + "</td>"
    + "<td>" + datos.matriculae + "</td>"
    + "<td>" + datos.identificacione + "</td>"
    + "<td>" + datos.telefonoe + "</td>"
    + "<td>" + datos.emaile + "</td>"
    + " </tr>";
  $("table tbody").append(rowDatos);
};

function guardardb(datos) {
  // buscando el controlador localStorage
  myStorage = window.localStorage;
  var Estudiantes = [];
  var dbEstudiantes = myStorage.getItem("Estudiantes");

  if (dbEstudiantes != null) {
    Estudiantes = JSON.parse(dbEstudiantes);
  }

  Estudiantes.push(datos);
  myStorage.setItem("Estudiantes", JSON.stringify(Estudiantes));
};

function eliminarEstudiante(fila) {

  myStorage = window.localStorage;
  var sTextoBuscado = "{";
  var expression = 0;
  var row = fila;
  var controlador = 0;
  var contador = 0;
  var datosAnteriores = myStorage.getItem("Estudiantes");

  if (datosAnteriores != null) {
    var sTexto = datosAnteriores;

    while (sTexto.indexOf(sTextoBuscado) > -1) {
      sTexto = sTexto.substring(sTexto.indexOf(sTextoBuscado) + sTextoBuscado.length, sTexto.length);
      contador++;
    }

    for (var i = 0; i <= datosAnteriores.length; i++) {
      if (datosAnteriores.substring(i, i + 1) == '{') {
        controlador++;
        if (controlador == fila) {
          fila = datosAnteriores.indexOf(sTextoBuscado, i);
          break;
        }
      }
    }

    var start = datosAnteriores.indexOf("{", fila);
    var end = datosAnteriores.indexOf("}", start);

    if (row == contador && contador > 1) {
      expression = 1;
    } else {
      expression = 2;
    }

    switch (expression) {
      case 1:
        var datosTemporales = (datosAnteriores.substring(start - 1, end + 1));
        break;
      default:
        var datosTemporales = (datosAnteriores.substring(start, end + 2));
    }

    if (contador > 1) {
      var datosNuevos = datosAnteriores.replace(datosTemporales, "");
      myStorage.removeItem("Estudiantes");
      myStorage.setItem("Estudiantes", (datosNuevos));
      document.getElementById("estudiantes").deleteRow(row);
    } else {
      myStorage.removeItem("Estudiantes");
    }

  }
};