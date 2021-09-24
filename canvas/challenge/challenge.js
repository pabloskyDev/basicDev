const c = document.getElementById("canvas_figure");

const canvas = c.getContext("2d");

function drawCanvasLines(color, xinicial, yinicial, xfinal, yfinal)
{
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(xinicial, yinicial);
    canvas.lineTo(xfinal, yfinal);
    canvas.stroke();
    canvas.closePath();
}

// drawCanvasLines("#ffffff", 0,0,300,300);
// drawCanvasLines("#ff0", 0,300,300,0);
drawCanvasLines("#ff0000", 150,150,151,151);
