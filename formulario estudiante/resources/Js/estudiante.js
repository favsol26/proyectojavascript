     var Estudiante = function(){
      var self= this;
      self.ide ="";
      self.nombree ="";
      self.matriculae ="";
      self.identificacione ="";
      self.telefonoe ="";
      self.emaile ="";
    };

    function recorrer(){
      var est1 = new Estudiante(); 

      var id = document.getElementById('IdEst').value;
      var nombre = document.getElementById('nombreEst').value;
      var matricula = document.getElementById('matriculaEst').value;
      var identificacion = document.getElementById('identificacionEst').value;
      var telefono = document.getElementById('telefonoEst').value;
      var email = document.getElementById('emailEst').value;

      est1.ide = id;
      est1.nombree = nombre;
      est1.matriculae = matricula;
      est1.identificacione = identificacion;
      est1.telefonoe = telefono;
      est1.emaile = email;

      addrow(est1);
    };

    function addrow(datos){ 
      var table = document.getElementById("estudiantes");

      var tr = document.createElement("tr");

      var tdId = document.createElement("td");
      var txtId = document.createTextNode(datos.ide);
      
      var tdEmail = document.createElement("td");
      var txtEmail = document.createTextNode(datos.emaile);

      var tdNombre = document.createElement("td");
      var txtNombre = document.createTextNode(datos.nombree);
      
      var tdTelefono = document.createElement("td");
      var txtTelefono = document.createTextNode(datos.telefonoe);
     
      var tdMatricula = document.createElement("td");
      var txtMatricula = document.createTextNode(datos.matriculae);
      
      var tdIdentificacion = document.createElement("td");
      var txtIdentificacion = document.createTextNode(datos.identificacione);
      
      tdId.appendChild(txtId);
      tr.appendChild(tdId);

      tdNombre.appendChild(txtNombre);
      tr.appendChild(tdNombre);

      tdMatricula.appendChild(txtMatricula);
      tr.appendChild(tdMatricula);

      tdIdentificacion.appendChild(txtIdentificacion);
      tr.appendChild(tdIdentificacion);

      tdTelefono.appendChild(txtTelefono);
      tr.appendChild(tdTelefono);

      tdEmail.appendChild(txtEmail);
      tr.appendChild(tdEmail);

      table.appendChild(tr);
    };
    