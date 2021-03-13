var canvas = document.getElementById("myCanvasHD");
var ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

var dx = 2;
var dy = -2;
var brickRowCount = 6;
var brickColumnCount = 7;
var brickWidth = 217;
var brickHeight = 45;
var brickPadding = 2;
var brickOffsetTop = 471;
var brickOffsetLeft = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}

//This function creates an ellipse
function drawHumptyDumpty() {
    ctx.beginPath();
    ctx.ellipse(750, 400, 85, 110, Math.PI / 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FAE5D3';
    ctx.fill();
    ctx.stroke();
}

//This function constructs the brick walls
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#bd5858";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw() {
    drawBricks();
    drawHumptyDumpty();

}

var interval = setInterval(draw, 10);


