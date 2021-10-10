const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();


// Escribir filas
    try {
        const respuesta = await fetch('https://sheet.best/api/sheets/2d151a3d-d362-4256-9104-e7dbfab6f68d', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.correo.value,
                "Telefono": formulario.telefono.value
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }

// Leer filas
try {
    const respuesta = await fetch('https://sheet.best/api/sheets/2d151a3d-d362-4256-9104-e7dbfab6f68d');

    const contenido = await respuesta.json();
    console.log(contenido);
} catch(error){
    console.log(error);
}
/*
// Eliminar filas
    try {
        const respuesta = await fetch('https://sheet.best/api/sheets/2d151a3d-d362-4256-9104-e7dbfab6f68d/0', {
            method: 'DELETE',
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }
    

// Actualizar filas
    try {
        const respuesta = await fetch('https://sheet.best/api/sheets/2d151a3d-d362-4256-9104-e7dbfab6f68d/2', {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Telefono": "888 88 88"
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    } */

    registro.classList.remove('activo');
    exito.classList.add('activo');

});