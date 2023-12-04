function toggleFondo() {
    // Obtener el elemento body
    var body = document.body;
    let nav = document.getElementById('nav')
    // Alternar la clase para cambiar el fondo
    body.classList.toggle('fondo-oscuro');
    nav.classList.toggle('fondo-oscuro');
    // // Obtener todas las etiquetas 'a' en el documento
    // var links = document.getElementsByTagName('a');

    // // Iterar sobre las etiquetas 'a' y alternar la clase para cambiar el fondo
    // for (var i = 0; i < links.length; i++) {
    //     links[i].classList.toggle('fondo-oscuro');
    // }

}
