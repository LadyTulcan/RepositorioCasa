function calcularDiferencias() {
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let cedula = document.getElementById('cedula').value;

    if (fechaNacimiento) {
        let nacimiento = new Date(fechaNacimiento);
        let hoy = new Date();

        let diferenciaAnios = hoy.getFullYear() - nacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();
        let diferenciaDias = hoy.getDate() - nacimiento.getDate();

        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
            diferenciaAnios--;
        }

        if (diferenciaDias < 0) {
            let diasDelMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
            diferenciaDias += diasDelMes;
        }

       
        document.getElementById('resultadoEdad').innerText = `Edad: ${diferenciaAnios} años, ${diferenciaMeses} meses, ${diferenciaDias} días`;
    
        document.getElementById('resultadoCedula').innerText = "Es ecuatoriano";
    }
}

