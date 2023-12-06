function toggleFondo() {
    // Obtener el elemento body
    var body = document.body;
    let nav = document.getElementById('nav');
    let aptitudes = document.getElementById('aptitudes');
    let services = document.getElementById('services');
    let contact = document.getElementById('contact');
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos'); 
    let piloto = document.getElementById('piloto'); 
    let ivan = document.getElementById('ivan'); 
    let btn = document.getElementById('btn'); 

    // Alternar la clase para cambiar el fondo
    body.classList.toggle('fondo-oscuro');
    nav.classList.toggle('fondo-oscuro');
    services.classList.toggle('fondo-oscuro');
    aptitudes.classList.toggle('fondo-oscuro');
    contact.classList.toggle('fondo-oscuro');
    uno.classList.toggle('fondo-oscuro');
    dos.classList.toggle('fondo-oscuro');
    piloto.classList.toggle('fondo-oscuro');
    ivan.classList.toggle('fondo-oscuro');
    btn.classList.toggle('fondo-oscuro');

    // Obtener todas las etiquetas 'a' en el documento
    var links = document.getElementsByTagName('li');

    // Iterar sobre las etiquetas 'a' y alternar la clase para cambiar el fondo
    for (var i = 0; i < links.length; i++) {
        links[i].classList.toggle('fondo-oscuro');
    }

}
