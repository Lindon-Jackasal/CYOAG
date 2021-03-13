var canvas = document.getElementById("myCanvasHD");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var brickRowCount = 6;
var brickColumnCount = 6;
var brickWidth = 150;
var brickHeight = 40;
var brickPadding = 3;
var brickOffsetTop = 242;
var brickOffsetLeft = 3;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}

function drawHumptyDumpty() {
    ctx.beginPath();
    ctx.ellipse(100, 100, 20, 45, Math.PI / 30, 0, 2 * Math.PI);
    ctx.stroke();
}

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawHumptyDumpty();

}

var interval = setInterval(draw, 10);




