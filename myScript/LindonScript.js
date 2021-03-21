var canvas = document.getElementById("myCanvasHD");
var ctx = canvas.getContext("2d");

       //canvas.width = canvas.offsetWidth;
       //canvas.height = canvas.offsetHeight;
       canvas.width = 1540;
       canvas.height = 760;

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

/*  ctx.beginPath();
    ctx.arc(750, 420, 85, 25.1, 1 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.restore();
*/
}

function drawClouds() {
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(200, 100);
   ctx.bezierCurveTo(160, 120, 160, 170, 260, 170);
   ctx.bezierCurveTo(280, 200, 350, 200, 370, 170);
   ctx.bezierCurveTo(450, 170, 450, 140, 420, 120);
   ctx.bezierCurveTo(460, 60, 400, 50, 370, 70);
   ctx.bezierCurveTo(350, 30, 280, 40, 280, 70);
   ctx.bezierCurveTo(230, 25, 180, 40, 200, 100);
   ctx.stroke();
   ctx.closePath();

}

function draw() {
    drawBricks();
    drawHumptyDumpty();
    drawClouds();

}


var interval = setInterval(draw, 10);



