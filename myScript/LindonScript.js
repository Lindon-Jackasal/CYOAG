var canvas = document.getElementById("myCanvasHD");
var ctx = canvas.getContext("2d");

       //canvas.width = canvas.offsetWidth;
       //canvas.height = canvas.offsetHeight;
       //The below code is required in order to fix the issue with the resizing on reload
       canvas.width = 1540;
       canvas.height = 760;

var x = -150;
var y = 100;
var xb = -950;
var yb = 300;
var dx = 1.2;
var dy = 0;
var brickRowCount = 6;
var brickColumnCount = 7;
var brickWidth = 217;
var brickHeight = 45;
var brickPadding = 2;
var brickOffsetTop = 471;
var brickOffsetLeft = 3;
var bricks = [];
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
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
    requestAnimationFrame(drawBricks);
}

//This function creates an ellipse/Humpty Dumpty
function drawHumptyDumpty() {
    //Draw an ellipse
    ctx.beginPath();
    ctx.ellipse(750, 400, 85, 110, Math.PI / 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FAE5D3';
    ctx.fill();
    ctx.stroke();

   //First Eyebrow
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(740, 380);
   ctx.quadraticCurveTo(720, 340, 690, 380);
   ctx.stroke();
   ctx.restore();

   //Second Eyebrow
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(810, 380);
   ctx.quadraticCurveTo(790, 340, 770, 380);
   ctx.stroke();
   ctx.restore();

   requestAnimationFrame(drawHumptyDumpty);
}

function drawClouds() {
   //The first cloud
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(x, y);
   ctx.bezierCurveTo(x - 40, y + 20, x - 40, y + 70, x + 60, y + 70);
   ctx.bezierCurveTo(x + 80, y + 100, x + 150, y + 100, x + 170, y + 70);
   ctx.bezierCurveTo(x + 250, y + 70, x + 250, y + 40, x + 220, y + 20);
   ctx.bezierCurveTo(x + 260, y - 40, x + 200, y - 50, x + 170, y - 30);
   ctx.bezierCurveTo(x + 150, y - 75, x + 80, y - 60, x + 80, y - 30);
   ctx.bezierCurveTo(x + 30, y - 75, x - 20, y - 60, x, y);
   ctx.fillStyle = "#DFF8FF";
   ctx.fill();
   ctx.stroke();
   ctx.closePath();
   x += dx;
   y += dy;

    if (Math.abs(x) >= 1600) {
        x = -230;
    }

   //The second cloud
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(xb, yb);
   ctx.bezierCurveTo(xb - 40, yb + 20, xb - 40, yb + 70, xb + 60, yb + 70);
   ctx.bezierCurveTo(xb + 80, yb + 100, xb + 150, yb + 100, xb + 170, yb + 70);
   ctx.bezierCurveTo(xb + 250, yb + 70, xb + 250, yb + 40, xb + 220, yb + 20);
   ctx.bezierCurveTo(xb + 260, yb - 40, xb + 200, yb - 50, xb + 170, yb - 30);
   ctx.bezierCurveTo(xb + 150, yb - 75, xb + 80, yb - 60, xb + 80, yb - 30);
   ctx.bezierCurveTo(xb + 30, yb - 75, xb - 20, yb - 60, xb, yb);
   ctx.fillStyle = "#DFF8FF";
   ctx.fill();
   ctx.stroke();
   ctx.closePath();
   xb += dx;
   yb += dy;

    if (Math.abs(xb) >= 1600) {
        xb = -230;
    }

requestAnimationFrame(drawClouds);

}

function draw() {
    drawClouds();
    drawBricks();
    drawHumptyDumpty();
}

requestAnimationFrame(draw);




