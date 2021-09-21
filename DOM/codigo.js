// window se refiere a toda la pestaña del navegador y .location es un atributo o propiedad de window
let path = window.location;
// document es un objeto y .write es un metodo del objeto document
document.write(`You are in this path: ${path}`);

window.confirm(`Are you sure about this option?`);

// Aqui estaba haciendo pruebas de como funcionan los metodos y atributos de los objetos principales del navegador.
console.log(document);
console.log(window);
console.log(navigator);
console.log(console);