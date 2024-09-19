document.getElementById('cliente-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const ciudad = document.getElementById('ciudad').value;
    
    console.log('Datos del cliente:');
    console.log(`Cédula: ${cedula}`);
    console.log(`Apellidos: ${apellidos}`);
    console.log(`Nombres: ${nombres}`);
    console.log(`Dirección: ${direccion}`);
    console.log(`Teléfono: ${telefono}`);
    console.log(`Correo: ${correo}`);
    console.log(`Ciudad: ${ciudad}`);
    
    alert('Datos enviados con éxito');
});
