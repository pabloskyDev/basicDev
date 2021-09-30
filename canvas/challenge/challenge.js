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

function drawCanvasCircle(colorCircle,centerX, centerY, radio, angleI , angleF)
{
    canvas.beginPath();
    canvas.arc(centerX, centerY, radio, angleI , angleF);
    if(colorCircle != "")
    {
        canvas.fillStyle= colorCircle;
        canvas.fill();    
    }
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
    drawCanvasLines(color_figures, size_width, size_width, 1, size_width);
    drawCanvasLines(color_figures, 1, size_width, 1, 1);
    drawCanvasLines(color_figures, 1, size_width, 1, size_width);

    // Cuadro interno
    let width_little = parseInt(220);
    let xli,ylf;
    let space_little = width_little / lines;

    for(let $i = 0; $i < lines; $i++)
    {
        xli = 80 + (space_little * $i);
        ylf = width_little - (space_little * $i );

        if((xli > 81 && xli < 221) || (ylf > 81 && ylf < 221))
        {
            drawCanvasLines(color_figures, xli, 80, 80, ylf);
            drawCanvasLines(color_figures, xli, 80, 220, (80 + (space_little * $i)));
            drawCanvasLines(color_figures, xli, 220, 220, ylf);
            drawCanvasLines(color_figures, xli, 220, 80, (80 + (space_little * $i)));
        }

        color == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, 80, 80, 220, 80);
    drawCanvasLines(color_figures, 80, 80, 80, 220);
    drawCanvasLines(color_figures, 80, 220, 220, 220);
    drawCanvasLines(color_figures, 220, 220, 220, 80);
}

function starByClick(colorStar)
{
    clearCanvas();

    if(colorStar == "All" || colorStar == undefined)
    {
        color_figures = colorRandom();
    }else{
        color_figures = colorStar;
    }

    let lines = parseInt(nmr_lines.value);
    let l = 0;
    let coord_1, coord_2, coord_3, coord_4,coord_5;
    let space = width_canvas / lines;
    let width_middle = width_canvas/2;

    // Main star
    for(l = 0; l < lines; l++)
    {
        coord_1 = space * l;
        coord_2 = space * l;
        coord_3 = width_middle + (space * l);
        coord_4 = width_middle - (space * l);
        coord_5 = width_canvas - (space * l);

        if((coord_1 > 0 && coord_1 < (width_middle + 1)) || (coord_2 > 0 && coord_2 < (width_middle + 1)))
        {
            drawCanvasLines(color_figures, coord_1, coord_2, coord_3, coord_4);
            drawCanvasLines(color_figures, coord_5, coord_2, coord_3, coord_3);
            drawCanvasLines(color_figures, coord_4, coord_3, coord_5, coord_5);
            drawCanvasLines(color_figures, coord_1, coord_2, coord_4, coord_3);
        }

        colorStar == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, 1, 1, width_middle, width_middle);
    drawCanvasLines(color_figures, 299, 1, width_middle, width_middle);
    drawCanvasLines(color_figures, 1, 299, width_middle, width_middle);
    drawCanvasLines(color_figures, 299, 299, width_middle, width_middle);

    // Second star

    for(let $i = 0; $i < lines; $i++)
    {
        coord_1 = width_middle + (space * $i);
        coord_2 = space * $i;
        coord_3 = width_canvas - (space * $i)
        coord_4 = width_middle - (space * $i);

        if(coord_2 > 0 && coord_2 < (width_middle + 1))
        {
            drawCanvasLines(color_figures, coord_1, width_middle, width_middle, coord_2);
            drawCanvasLines(color_figures, coord_1, width_middle, width_middle, coord_3);
            drawCanvasLines(color_figures, coord_4, width_middle, width_middle, coord_3);
            drawCanvasLines(color_figures, coord_4, width_middle, width_middle, coord_2);
        }

        colorStar == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, width_middle, width_middle, width_middle, 1);
    drawCanvasLines(color_figures, width_middle, width_middle, width_canvas, width_middle);
    drawCanvasLines(color_figures, width_middle, width_middle, width_middle, width_canvas);
    drawCanvasLines(color_figures, width_middle, width_middle, 1, width_middle);
}

function vorticeByClick(colorVortice)
{
    clearCanvas();

    if(colorVortice == "All" || colorVortice == undefined)
    {
        color_figures = colorRandom();
    }else{
        color_figures = colorVortice;
    }

    let lines = parseInt(nmr_lines.value);
    let l = 0;
    let coord_1, coord_2, coord_3, coord_4,coord_5;
    let space = width_canvas / lines;
    let width_middle = width_canvas/2;

    for(l = 0; l < lines; l++)
    {
        coord_1 = width_middle - (space * l);
        coord_2 = space * l;
        coord_3 = width_middle + (space * l);
        coord_4 = width_canvas - (space * l);

        if(coord_2 > 0 && coord_2 < (width_middle + 1))
        {
            drawCanvasLines(color_figures, width_middle, width_middle, 1, coord_1);
            drawCanvasLines(color_figures, width_middle, width_middle, coord_2, 1);
            drawCanvasLines(color_figures, width_middle, width_middle, coord_3, 1);
            drawCanvasLines(color_figures, width_middle, width_middle, width_canvas, coord_2);
            drawCanvasLines(color_figures, width_middle, width_middle, width_canvas, coord_3);
            drawCanvasLines(color_figures, width_middle, width_middle, coord_4, width_canvas);
            drawCanvasLines(color_figures, width_middle, width_middle, coord_1, width_canvas);
            drawCanvasLines(color_figures, width_middle, width_middle, 1, coord_4);

        }

        colorVortice == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, width_middle, width_middle, width_middle, 1);
    drawCanvasLines(color_figures, width_middle, width_middle, width_canvas, width_middle);
    drawCanvasLines(color_figures, width_middle, width_middle, width_middle, width_canvas);
    drawCanvasLines(color_figures, width_middle, width_middle, 1, width_middle);
}

function eyeByClick(colorEye)
{
    clearCanvas();

    if(colorEye == "All" || colorEye == undefined)
    {
        color_figures = colorRandom();
    }else{
        color_figures = colorEye;
    }

    let lines = parseInt(nmr_lines.value);
    let l = 0;
    let coord_1;
    let space = width_canvas / lines;
    let width_middle = width_canvas/2;

    for(l = 0; l < lines; l++)
    {
        coord_1 = space * l;

        drawCanvasLines(color_figures, 1, coord_1, coord_1, width_canvas);
        drawCanvasLines(color_figures, coord_1, 1, width_canvas, coord_1);

        colorEye == "All" ? color_figures = colorRandom() : color_figures;
    }

    drawCanvasLines(color_figures, 1, 1, width_canvas, 1);
    drawCanvasLines(color_figures, 1, 1, 1, width_canvas);
    drawCanvasLines(color_figures, 1, width_canvas, width_canvas, width_canvas);
    drawCanvasLines(color_figures, width_canvas, 1, width_canvas, width_canvas);

    drawCanvasCircle("",100,60,30,0,2*Math.PI);
    drawCanvasCircle("",width_middle,width_middle,70,0,2*Math.PI);
    drawCanvasCircle(color_figures,width_middle,width_middle,40,0,2*Math.PI);
    if(color_figures == "#ffffff")
    {
        drawCanvasCircle("#000000",width_middle,width_middle,20,0,2*Math.PI);
    }else{
        drawCanvasCircle("#ffffff",width_middle,width_middle,20,0,2*Math.PI);
    }
}

function flowerByClick(colorFlower)
{
    clearCanvas();

    if(colorFlower == "All" || colorFlower == undefined)
    {
        color_figures = colorRandom();
    }else{
        color_figures = colorFlower;
    }

    let lines = parseInt(nmr_lines.value);
    let l = 0;
    let coord_1, coord_2, coord_3, coord_4, coord_5, coord_6, coord_7;
    let space = width_canvas / lines;
    let width_middle = width_canvas/2;
    let middle_little = width_middle/2;
    let middle_bigger = (width_middle + middle_little);

    for(l = 0; l < lines; l++)
    {
        coord_1 = width_middle - (space * l);
        coord_2 = middle_little + (space * l);
        coord_3 = middle_bigger - (space * l);
        coord_4 = width_middle + (space * l);

        if(coord_1 > (middle_little-1) && coord_1 < (width_middle + 1))
        {
            drawCanvasLines(color_figures, middle_little, coord_1, coord_2, middle_little);
            drawCanvasLines(color_figures, middle_bigger, coord_1, coord_3, middle_little);
            drawCanvasLines(color_figures, coord_3, middle_bigger, middle_bigger, coord_4);
            drawCanvasLines(color_figures, middle_little, coord_4, coord_2, middle_bigger);
        }
    }

    drawCanvasLines(color_figures, middle_little, middle_little, middle_bigger, middle_little);
    drawCanvasLines(color_figures, middle_bigger, middle_little, middle_bigger, middle_bigger);
    drawCanvasLines(color_figures, middle_bigger, middle_bigger, middle_little, middle_bigger);
    drawCanvasLines(color_figures, middle_little, middle_little, middle_little, middle_bigger);

    // Mini flowers loop
    coord_1 = 0;
    coord_2 = 0;
    coord_3 = 0;
    coord_4 = 0;

    for(let $i = 0; $i < lines; $i++)
    {
        coord_1 = middle_little - (space * $i);
        coord_2 = width_middle - (space * $i);
        coord_3 = space * $i;
        coord_4 = middle_little + (space * $i);
        coord_5 = width_middle + (space * $i);
        coord_6 = middle_bigger + (space * $i);
        coord_7 = middle_bigger - (space * $i);

        if(coord_1 > 0 && coord_1 < (middle_little + 1))
        {
            // middle_little quadrant
            drawCanvasLines(color_figures, middle_little, middle_little, coord_1, width_middle);
            drawCanvasLines(color_figures, middle_little, middle_little, 1, coord_2);
            drawCanvasLines(color_figures, middle_little, middle_little, 1, coord_1);
            drawCanvasLines(color_figures, middle_little, middle_little, coord_3, 1);
            drawCanvasLines(color_figures, middle_little, middle_little, coord_4, 1);
            drawCanvasLines(color_figures, middle_little, middle_little, width_middle, coord_3);

            // middle_bigger - middle_little quadrant
            drawCanvasLines(color_figures, middle_bigger, middle_little, width_middle, coord_1);
            drawCanvasLines(color_figures, middle_bigger, middle_little, coord_5, 1);
            drawCanvasLines(color_figures, middle_bigger, middle_little, coord_6, 1);
            drawCanvasLines(color_figures, middle_bigger, middle_little, width_canvas, coord_3);
            drawCanvasLines(color_figures, middle_bigger, middle_little, width_canvas, coord_4);
            drawCanvasLines(color_figures, middle_bigger, middle_little, coord_6, width_middle);

            // middle_bigger quadrant 
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, coord_6, width_middle);
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, width_canvas, coord_5);
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, width_canvas, coord_6);
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, coord_6, width_canvas);
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, coord_5, width_canvas);
            drawCanvasLines(color_figures, middle_bigger, middle_bigger, width_middle, coord_6);

            // middle_little - middle_bigger quadrant
            drawCanvasLines(color_figures, middle_little, middle_bigger, width_middle, coord_6);
            drawCanvasLines(color_figures, middle_little, middle_bigger, coord_4, width_canvas);
            drawCanvasLines(color_figures, middle_little, middle_bigger, coord_1, width_canvas);
            drawCanvasLines(color_figures, middle_little, middle_bigger, 1, coord_6);
            drawCanvasLines(color_figures, middle_little, middle_bigger, 1, coord_5);
            drawCanvasLines(color_figures, middle_little, middle_bigger, coord_1, width_middle);

            // width_middle flower
            drawCanvasLines(color_figures, coord_2, width_middle, width_middle, coord_4);
            drawCanvasLines(color_figures, coord_5, width_middle, width_middle, coord_4);
            drawCanvasLines(color_figures, coord_2, width_middle, width_middle, coord_7);
            drawCanvasLines(color_figures, coord_5, width_middle, width_middle, coord_7);

        }
        colorFlower == "All" ? color_figures = colorRandom() : color_figures;
    }
}


function clearCanvas()
{
    canvas.clearRect(0,0,c.width,c.height);
}

function createFigure(type)
{
    clearCanvas();

    switch (type) {
        case "id_flower":
            flowerByClick();
            break;
        case "id_eye":
            eyeByClick();
            break;
        case "id_square":
            squareByClick();
            break;
        case "id_star":
            starByClick();
            break;
        case "id_vortice":
            vorticeByClick();
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
    console.log(this.value);
    squareByClick(color_param);
    starByClick(color_param);
    vorticeByClick(color_param);
    eyeByClick(color_param);
    flowerByClick(color_param);
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