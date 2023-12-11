async function toggleFondo() {
    // Obtener el elemento body
    var body = document.body;

    // Obtener IDs de elementos
    let elementIds = ['nav', 'aptitudes', 'services', 'contact', 'uno', 'dos', 'piloto', 'ivan', 'btn', 'combo', 'comboDos', 'comboTres', 'redes'];

    // Función para obtener un elemento de forma asíncrona
    async function getElementAsync(elementId) {
        return new Promise((resolve) => {
            let element = document.getElementById(elementId);
            resolve(element);
        });
    }

    // Función para alternar la clase de un elemento de forma asíncrona
    async function toggleClassAsync(element, className) {
        if (element) {
            element.classList.toggle(className);
        }
    }

    // Realizar operaciones de manera asíncrona
    await toggleClassAsync(body, 'fondo-oscuro');

    for (let elementId of elementIds) {
        let element = await getElementAsync(elementId);
        await toggleClassAsync(element, 'fondo-oscuro');
    }

        // Obtener todas las etiquetas 'a' en el documento
        var links = document.getElementsByTagName('li');

        // Iterar sobre las etiquetas 'a' y alternar la clase para cambiar el fondo
        for (var i = 0; i < links.length; i++) {
            links[i].classList.toggle('fondo-oscuro');
        }
}
// Llamar a la función toggleFondo
// toggleFondo();