let d = document.getElementById("little_draw");
// .getContext es un método del objeto canvas
let canvas = d.getContext("2d");
console.log(canvas);

// .beginPath es el método que ayuda a iniciar un trazo.
canvas.beginPath();
// .strokeStyle es un atributo que define el color de la linea
canvas.strokeStyle = "#ff0000";
// .moveTo es un método para mover el lápiz a donde va a arrancar la linea. (coordenadas iniciales)
canvas.moveTo(100,100);
// .lineTo es la función de trazar una linea, arcos, puntos, etc
canvas.lineTo(200, 200);
// .stroke dibuja la linea
canvas.stroke();
// .closePath es el método que ayuda a cerrar el trazo.
canvas.closePath();

