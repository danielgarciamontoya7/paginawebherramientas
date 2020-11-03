function validarFormulario(){
			var txtNombre = document.getElementById('Nombre').value;
			var txtDireccion = document.getElementById('Direccion').value;
			var txtTelefono = document.getElementById('Telefono').value;
			var txtCorreo = document.getElementById('Correo').value;
			var txtCiudad = document.getElementById('Ciudad').value;
			var txtEdad = document.getElementById('Edad').value;	
			//prueba campo  obligatorio
			
			if (txtNombre == null || txtNombre.length == 0) {
				alert("Error: Debes ingresar un Nombre");
				return false;
			}
			if (txtDireccion == null || txtDireccion.length == 0) {
				alert("Error: Debes ingresar una Dirección");
				return false;
			}
			if (txtTelefono == null || txtTelefono.length == 0) {
				alert("Error: Debes ingresar un Teléfono");
				return false;
			}
			if (txtCorreo == null || txtCorreo.length == 0) {
				alert("Error: Debes ingresar un Correo");
				return false;
			}
			if (txtCiudad == null || txtCiudad.length == 0) {
				alert("Error: Debes ingresar una Ciudad");
				return false;
			}
			if (txtEdad == null || txtEdad.length == 0) {
				alert("Error: Debes ingresar una Edad");
				return false;
			}
			
			alert('Datos correctos, enviando información al servidor')
			return true;
		}