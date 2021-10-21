let keys = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", drawingWithKeyboard);
let notebook = document.getElementById("drawing_area");
let paper = notebook.getContext("2d");
let x = 150;
let y = 150;

drawLines("#ff0000",149,149,151,151,paper);

function drawLines(color, xinicial, yinicial, xfinal, yfinal, canvas) 
{
    canvas.beginPath();
    canvas.strokeStyle = color;
    canvas.lineWidth = 2;
    canvas.moveTo(xinicial, yinicial);
    canvas.lineTo(xfinal, yfinal);
    canvas.stroke();
    canvas.closePath();
}

function drawingWithKeyboard(event)
{
    let colorcito = "#ffffff";
    let movement = 10;

    switch (event.keyCode) {
        case keys.UP:
            drawLines(colorcito,x,y,x,y - movement, paper);
            y = y - movement;
            break;

        case keys.DOWN:
            drawLines(colorcito,x,y,x,y + movement, paper);
            y = y + movement;
            break;

        case keys.LEFT:
            drawLines(colorcito,x,y,x - movement,y, paper);
            x = x - movement;
            break;

        case keys.RIGHT:
            drawLines(colorcito,x,y,x + movement,y, paper);
            x = x + movement;
            break;
    }
}