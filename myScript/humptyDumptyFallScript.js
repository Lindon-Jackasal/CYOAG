window.onload = function(){
        document.getElementById("mainMenu").style.display='none';
};

function showOrHideMenu() {
     var mm = document.getElementById("mainMenu");
     var cc = document.getElementById("btnMenu");
     var canv = document.getElementById("hdFall");
     var choicesD = document.getElementById("humptyDFall");
     
      if (mm.style.display === "none" || canv.style.display === "inline-block") {
            canv.style.display = "none";
            choicesD.style.display = "none";
            mm.style.display = "block";
            cc.style.background = "white";
            cc.style.color = "black";
      }
      else if (mm.style.display === "block" || canv.style.display === "none") {
            mm.style.display = "none";
            canv.style.display = "inline-block";
            choicesD.style.display = "inline-block";
            cc.style.background = "#4CAF50";
            cc.style.color = "white";
      }
}

//The image needs to be preloaded, in order for canvas to draw/display it 
var eggImg = document.createElement('img');
var kingsmen1Img = document.createElement('img');
var horsesImg = document.createElement('img');
kingsmen1Img.src = '../../myImages/kingsmen1.png';
eggImg.src = '../../myImages/egg.png';
horsesImg.src = '../../myImages/horse1.png';
window.addEventListener('load', function(){ 

var canvas = document.getElementById("hdFall");
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
var xc = 1350;
var yc = 420;
var dx = 1.2;
var dy = 0;
var xg = 750;
var yg = 570;
var brickRowCount = 12;
var brickColumnCount = 7;
var brickWidth = 220;
var brickHeight = 46;
var brickPadding = 0.5;
var brickOffsetTop = 205;
var brickOffsetLeft = 0;
var bricks = [];
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/* Adapted from: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field */
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
            ctx.stroke();
            ctx.closePath();
        }
    }
    requestAnimationFrame(drawBricks);
}

function drawEgg() {
    ctx.drawImage(eggImg, 630, 645, 255, 110);
    requestAnimationFrame(drawEgg); 
}

function drawKingsMenHorses() {
    ctx.drawImage(kingsmen1Img, 780, 345, 380, 378);
    ctx.drawImage(kingsmen1Img, 880, 385, 380, 378);
    ctx.drawImage(horsesImg, 1180, 505, 350, 206);
    requestAnimationFrame(drawKingsMenHorses); 
}

//This function creates an ellipse/Humpty Dumpty
function drawHumptyDumpty() {
    //Draw an ellipse
    ctx.beginPath();
    ctx.moveTo(xg, yg);
    ctx.ellipse(12 + xg, 0 + yg, 85, 110, Math.PI / 30, 0, 2 * Math.PI);
    ctx.fillStyle = '#FAE5D3';
    ctx.fill();
    //ctx.stroke();

   //First Eyebrow
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(xg - 35, yg - 45);
   ctx.quadraticCurveTo(xg - 10, yg - 80, xg + 5, yg - 45);
   ctx.stroke();
   ctx.restore();

   //Second Eyebrow
   ctx.beginPath();
   ctx.lineWidth = 1;
   ctx.moveTo(xg + 75, yg - 45);
   ctx.quadraticCurveTo(xg + 55, yg - 80, xg + 35, yg - 45);
   ctx.stroke();
   ctx.restore();

       //Eyes
       ctx.beginPath();
       ctx.arc(xg - 15, yg - 25, 15, 0, 2 * Math.PI);
       ctx.fillStyle = "white";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(xg + 55, yg - 25, 15, 0, 2 * Math.PI);
       ctx.fillStyle = "white";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       //Nose
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(xg + 20, yg - 15);
        ctx.quadraticCurveTo(xg + 30, yg + 10, xg + 5, yg + 15);
        ctx.stroke();
        ctx.restore();

       //Mouth
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(xg + 55, yg + 30);
        ctx.quadraticCurveTo(xg + 15, yg + 35, xg - 25, yg + 30);
        ctx.stroke();
        ctx.restore();

        //Crack var xg = 250; var yg = 550;
        ctx.beginPath();
        //ctx.moveTo(xg + 10, yg + 108);
        ctx.lineTo(xg - 10, yg + 80);
        ctx.lineTo(xg + 20, yg + 50);
        ctx.lineTo(xg - 10, yg + 30);
        ctx.lineTo(xg + 20, yg + 10);
        ctx.lineTo(xg - 10, yg + 0);
        ctx.lineTo(xg + 20, yg - 20);
        ctx.lineTo(xg - 10, yg - 50);
        ctx.lineTo(xg + 20, yg - 80);
        ctx.lineTo(xg - 10, yg - 105);
        ctx.lineWidth = 6;
        ctx.stroke();
        ctx.restore();

   requestAnimationFrame(drawHumptyDumpty);
}

function drawBush() {
       //drawBush
       ctx.beginPath();
       ctx.lineWidth = 1;
       ctx.moveTo(xc, yc);
       ctx.bezierCurveTo(xc - 40, yc + 20, xc - 40, yc + 70, xc + 60, yc + 70);
       ctx.bezierCurveTo(xc + 80, yc + 100, xc + 150, yc + 100, xc + 170, yc + 70);
       ctx.bezierCurveTo(xc + 250, yc + 70, xc + 250, yc + 40, xc + 220, yc + 20);
       ctx.bezierCurveTo(xc + 260, yc - 40, xc + 200, yc - 50, xc + 170, yc - 30);
       ctx.bezierCurveTo(xc + 150, yc - 75, xc + 80, yc - 60, xc + 80, yc - 30);
       ctx.bezierCurveTo(xc + 30, yc - 75, xc - 20, yc - 60, xc, yc);
       ctx.fillStyle = "#24C000";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.rect(0, 290, 130, 220);
       ctx.fillStyle = "#BF8E02";
       ctx.fill();
       ctx.stroke();
       ctx.restore();

       var xd = -50;
       var yd = 225;
       ctx.beginPath();
       ctx.lineWidth = 1;
       ctx.moveTo(xd, yd);
       ctx.bezierCurveTo(xd - 40, yd + 20, xd - 40, yd + 70, xd + 60, yd + 70);
       ctx.bezierCurveTo(xd + 80, yd + 100, xd + 150, yd + 100, xd + 170, yd + 70);
       ctx.bezierCurveTo(xd + 250, yd + 70, xd + 250, yd + 40, xd + 220, yd + 20);
       ctx.bezierCurveTo(xd + 260, yd - 40, xd + 200, yd - 50, xd + 170, yd - 30);
       ctx.bezierCurveTo(xd + 150, yd - 75, xd + 80, yd - 60, xd + 80, yd - 30);
       ctx.bezierCurveTo(xd + 30, yd - 75, xd - 20, yd - 60, xd, yd);
       ctx.fillStyle = "#24C000";
       ctx.fill();
       //ctx.stroke();
       ctx.closePath();

       var xe = 50;
       var ye = 220;
       ctx.beginPath();
       ctx.lineWidth = 1;
       ctx.moveTo(xe, ye);
       ctx.bezierCurveTo(xe - 40, ye + 20, xe - 40, ye + 70, xe + 60, ye + 70);
       ctx.bezierCurveTo(xe + 80, ye + 100, xe + 150, ye + 100, xe + 170, ye + 70);
       ctx.bezierCurveTo(xe + 250, ye + 70, xe + 250, ye + 40, xe + 220, ye + 20);
       ctx.bezierCurveTo(xe + 260, ye - 40, xe + 200, ye - 50, xe + 170, ye - 30);
       ctx.bezierCurveTo(xe + 150, ye - 75, xe + 80, ye - 60, xe + 80, ye - 30);
       ctx.bezierCurveTo(xe + 30, ye - 75, xe - 20, ye - 60, xe, ye);
       ctx.fillStyle = "#24C000";
       ctx.fill();
       //ctx.stroke();
       ctx.closePath();

       var xf = 0;
       var yf = 140;
       ctx.beginPath();
       ctx.lineWidth = 1;
       ctx.moveTo(xf, yf);
       ctx.bezierCurveTo(xf - 40, yf + 20, xf - 40, yf + 70, xf + 60, yf + 70);
       ctx.bezierCurveTo(xf + 80, yf + 100, xf + 150, yf + 100, xf + 170, yf + 70);
       ctx.bezierCurveTo(xf + 250, yf + 70, xf + 250, yf + 40, xf + 220, yf + 20);
       ctx.bezierCurveTo(xf + 260, yf - 40, xf + 200, yf - 50, xf + 170, yf - 30);
       ctx.bezierCurveTo(xf + 150, yf - 75, xf + 80, yf - 60, xf + 80, yf - 30);
       ctx.bezierCurveTo(xf + 30, yf - 75, xf - 20, yf - 60, xf, yf);
       ctx.fillStyle = "#24C000";
       ctx.fill();
       //ctx.stroke();
       ctx.closePath();

       //draw the cherries on the tree
       ctx.beginPath();
       ctx.arc(100, 150, 10, 0, 2 * Math.PI);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(130, 250, 10, 0, 2 * Math.PI);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(30, 210, 10, 0, 2 * Math.PI);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(210, 200, 10, 0, 2 * Math.PI);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       requestAnimationFrame(drawBush);
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

//This function draws the ground, together with the stones using canvas
function drawGround() {
       //Ground
       ctx.beginPath();
       ctx.rect(0, 620, 1540, 300);
       ctx.fillStyle = "#9b7653";
       ctx.fill();
       ctx.stroke();
       ctx.restore();

       //Stones
       ctx.beginPath();
       ctx.arc(1100, 710, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "#BF8E02";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(1108, 715, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "#BF8E02";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       //Stones
       ctx.beginPath();
       ctx.arc(700, 720, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "#BF8E02";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(690, 725, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "#BF8E02";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

    requestAnimationFrame(drawGround);
}

function draw() {
    drawClouds();
    drawBush();
    drawBricks();
    drawGround();
    drawEgg();
    drawHumptyDumpty();
    drawKingsMenHorses();
}

requestAnimationFrame(draw);

});
