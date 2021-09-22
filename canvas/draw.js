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

for (l = 0; l < (lines/2); l++)
{
    yi = 10 * l;
    xf = (lines * 10)/2 - yi; 
    xi = (lines * 10)/2 - (10 * l);
    yf = (lines * 10) - (10 * l);

    drawLines("#eb6f42", 250, yi, xf, 250);
    drawLines("#ebda42", 250, yi, 250 + (10 * l), 250);
    drawLines("#c70404", xi, 250, 250, yf);
    drawLines("#a938ff", 250 + (10 * l), 250, 250, yf);
}

drawLines("#eb6f42", 250, 1, 250, 250);
drawLines("#eb6f42", 1, 250, 250, 250);
drawLines("#ebda42", 250, 1, 250, 250);
drawLines("#ebda42", 500, 250, 250, 250);
drawLines("#c70404", 250, 250, 250, 500);
drawLines("#c70404", 1, 251, 251, 251);
drawLines("#a938ff", 251, 251, 251, 500);
drawLines("#a938ff", 251, 251, 500, 251);

l = 0;
do
{
    l++;
    yi = 10 * l;
    xf = 200 - (10 * l);
    xi = 200 - (10 * l);
    yf = (lines * 10) - (10 * l);
    drawLines("#eb6f42", 200, yi, xf, 200);
    drawLines("#ebda42", 300, yi, 300 + yi, 200);
    drawLines("#c70404", xi, 300, 200, yf);
    drawLines("#a938ff", 300 + (10 * l), 300, 300, yf);
}while (l < 20)

drawLines("#eb6f42", 200, 1, 200, 200);
drawLines("#ebda42", 300, 1, 300, 200);
drawLines("#c70404", 200, 300, 200, 500);
drawLines("#a938ff", 300, 300, 300, 500);

l = 0;
while (l < 30)
{
    l++;
    yi = 5 * l;
    xf = 150 - yi;
    xi = 150 - (5 * l);
    yf = (lines * 10) - (5 * l);
    drawLines("#eb6f42", 150, yi, xf, 150);
    drawLines("#ebda42", 350, yi, 350 + yi, 150);
    drawLines("#c70404", xi, 350, 150, yf);
    drawLines("#a938ff", 350 + (5 *l), 350, 350, yf);
}

drawLines("#eb6f42", 150, 1, 150, 150);
drawLines("#ebda42", 350, 1, 350, 150);
drawLines("#c70404", 150, 350, 150, 500);
drawLines("#a938ff", 350, 350, 350, 500);

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
