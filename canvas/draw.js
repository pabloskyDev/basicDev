const d = document.getElementById("little_draw");
// .getContext es un método del objeto canvas
const canvas = d.getContext("2d");
const lines = 50;
let l = 0;
let xi, yi, xf, yf;

while (l < lines)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    drawLines("#ffffff", 0, yi, xf, 500);
    l++;
}
drawLines("#ffffff", 1, 1, 1, 499);
drawLines("#ffffff", 0, 499, 499, 499);

for(l = 0; l < lines; l++)
{
    xi = 10 * l;
    yf = 10 * (l + 1);
    drawLines("#AA0056", xi, 0, 500, yf);
}
drawLines("#AA0056", 1, 1, 499, 1);
drawLines("#AA0056", 499, 1, 499, 499);

l = 0;
do
{
    l++;
    yi = 10 * l;
    xf = (lines * 10) - yi;
    drawLines("#6db2fc", 500, yi, xf, 500);
    
}while (l < lines)

drawLines("#6db2fc", 499, 1, 499, 499);

l = 0;
while (l < lines)
{
    
    l++;
    xf = 10 * l;
    yi = (lines * 10) - xf;
    drawLines("#19ff40", 1, yi, xf, 1);
}

drawLines("#19ff40", 1, 499, 1, 1);

function drawLines(color, xinicial, yinicial, xfinal, yfinal) 
{
    // .beginPath es el método que ayuda a iniciar un trazo.
    canvas.beginPath();
    // .strokeStyle es un atributo que define el color de la linea
    canvas.strokeStyle = color;
    // .moveTo es un método para mover el lápiz a donde va a arrancar la linea. (coordenadas iniciales)
    canvas.moveTo(xinicial, yinicial);
    // .lineTo es la función de trazar una linea, arcos, puntos, etc
    canvas.lineTo(xfinal, yfinal);
    // .stroke dibuja la linea
    canvas.stroke();
    // .closePath es el método que ayuda a cerrar el trazo.
    canvas.closePath();
}
