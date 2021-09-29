const nmr_lines = document.getElementById("nmr_lines");
let color_figures = "#ffffff";
// const btn_clear = document.getElementById("rm_data");
// btn_clear.addEventListener("click", clearCanvas);

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

function squareByClick(color)
{
    clearCanvas();

    if(color == "All" || color == undefined)
    {
        color_figures = colorRandom();
    }else{
        color_figures = color;
    }

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

        drawCanvasLines(color_figures, xi, 0, width_canvas, yf);
        drawCanvasLines(color_figures, width_canvas, yi, xf, width_canvas);
        drawCanvasLines(color_figures, 1, yi, (space * l), size_width);
        drawCanvasLines(color_figures, xi, 1, 1, width_canvas - (space * l ));

        color == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, 1, 1, size_width, 1);
    drawCanvasLines(color_figures, size_width, 1, size_width, size_width);
    drawCanvasLines(color_figures, size_width, 1, size_width, size_width);
    drawCanvasLines(color_figures, size_width, size_width, 1, size_width);
    drawCanvasLines(color_figures, size_width, size_width, 1, size_width);
    drawCanvasLines(color_figures, 1, size_width, 1, 1);
    drawCanvasLines(color_figures, 1, 1, size_width, 1);
    drawCanvasLines(color_figures, 1, size_width, 1, size_width);

    // Cuadro interno
    let width_little = parseInt(140);
    let xli,yli,xlf,ylf;
    let space_little = width_little / lines;

    for(let $i = 0; $i < lines; $i++)
    {
        xli = space_little * $i;
        ylf = width_little - (space_little * $i );

        drawCanvasLines(color_figures, xli, 80, 80, ylf);

        color == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, 80, 80, 220, 80);
    drawCanvasLines(color_figures, 80, 80, 80, 220);
    drawCanvasLines(color_figures, 80, 220, 220, 220);
    drawCanvasLines(color_figures, 220, 220, 220, 80);


    // drawCanvasLines(color_figures, 90, 80, 80, 210);
    // drawCanvasLines(color_figures, 100, 80, 80, 200);
    // drawCanvasLines(color_figures, 110, 80, 80, 190);
    // drawCanvasLines(color_figures, 120, 80, 80, 180);

}

function clearCanvas()
{
    canvas.clearRect(0,0,c.width,c.height);
}

function createFigure(type)
{
    // const btn_create = document.getElementById("sv_data");
    // btn_create.addEventListener("click", squareByClick);

    clearCanvas();

    switch (type) {
        case "id_buterfly":
            
            break;
        case "id_eye":
        
            break;
        case "id_name":
    
            break;
        case "id_square":
            squareByClick();
            // document.addEventListener('keyup', squareByClick);

            break;
        case "id_star":
    
            break;
        case "id_vortice":
    
            break;
        default:
            break;
    }
}

function colorCanvas(value)
{
    switch (value) {
        case "White":
            colorAllFigures("#ffffff");
            break;
        case "Orange":
            colorAllFigures("#fc5f04");
            break;
        case "Red":
            colorAllFigures("#ff0000");
            break;
        case "Yellow":
            colorAllFigures("#fff000");
            break;
        case "All":
            colorAllFigures("All");
            break;
        default:
            break;
    }
}

function colorAllFigures(color_param)
{
    squareByClick(color_param);

}

// function colorRandom()
// {
//     let colors = new Array();
//     colors = ['#ffffff', '#000000','#ff0000','#fff000','#fc5f04'];
//     let position = (Math.random() * 5).toFixed(0);

//     return colors[position];

// }

function generateLetters()
{
    let letters = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let position = (Math.random() * 15).toFixed(0);
    return letters[position];
}

function colorRandom()
{
    let colorHex = "";
    for(let $i= 0; $i < 6; $i++)
    {
        colorHex = colorHex + generateLetters();
    }
    return "#" + colorHex;
}