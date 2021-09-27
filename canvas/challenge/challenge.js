const nmr_lines = document.getElementById("nmr_lines");

const btn_create = document.getElementById("sv_data");
btn_create.addEventListener("click", createByClick);

const btn_clear = document.getElementById("rm_data");
btn_clear.addEventListener("click", clearCanvas);

// const btn_color = document.getElementsByClassName("btn_color");
// btn_color.addEventListener("click", colorCanvas);

const c = document.getElementById("canvas_figure");
const canvas = c.getContext("2d");
const width_canvas = c.width;

function drawCanvasLines(color, xinicial, yinicial, xfinal, yfinal)
{
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.moveTo(xinicial, yinicial);
    canvas.lineTo(xfinal, yfinal);
    canvas.stroke();
    canvas.closePath();
}

// drawCanvasLines("#ff0000", 150,150,0,0);

function createByClick()
{
    clearCanvas();

    let lines = parseInt(nmr_lines.value);
    let l = 0;
    let xi, yi, xf, yf;
    let space = width_canvas / lines;
    let size_width = width_canvas - 1;

    for(l = 0; l < lines; l++)
    {
        xi = space * l;
        yi = space * l;
        xf = width_canvas - (space * l );
        yf = space * (l + 1);

        drawCanvasLines("#ffffff", xi, 0, width_canvas, yf);
        drawCanvasLines("#fff000", width_canvas, yi, xf, width_canvas);
        drawCanvasLines("#000000", 1, yi, (space * l), size_width);
        drawCanvasLines("#ff0000", xi, 1, 1, width_canvas - (space * l ));

    }
    drawCanvasLines("#ffffff", 1, 1, size_width, 1);
    drawCanvasLines("#ffffff", size_width, 1, size_width, size_width);
    drawCanvasLines("#fff000", size_width, 1, size_width, size_width);
    drawCanvasLines("#fff000", size_width, size_width, 1, size_width);
    drawCanvasLines("#000000", size_width, size_width, 1, size_width);
    drawCanvasLines("#000000", 1, size_width, 1, 1);
    drawCanvasLines("#ff0000", 1, 1, size_width, 1);
    drawCanvasLines("#ff0000", 1, size_width, 1, size_width);

    drawCanvasLines("#000000", 80, 80, 220, 80);
    drawCanvasLines("#000000", 80, 80, 80, 220);
    drawCanvasLines("#000000", 80, 220, 220, 220);
    drawCanvasLines("#000000", 220, 220, 220, 80);

}

function clearCanvas()
{
    canvas.clearRect(0,0,c.width,c.height);
}

// function colorCanvas()
// {
//     console.log('Un mensaje ' + btn_color.value);
// }