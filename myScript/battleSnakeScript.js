var instructionsBar = true;
var hitBar = false;

//Function used to close to instructions bar
function closeInstructionsBar() {
      var im = document.getElementById("instructMenu");
      
      if (im.style.display === "block") {
            im.style.display = "none";
            instructionsBar = false;
      }
}

//The image needs to be preloaded, in order for canvas to draw/display it 
var snakeImg = document.createElement('img');
var goldImg = document.createElement('img');
snakeImg.src = '../../myImages/snake.png';
goldImg.src = '../../myImages/gold.gif';
window.addEventListener('load', function(){ 

var canvas = document.getElementById("battleTheSnake");
var ctx = canvas.getContext("2d");

       //canvas.width = canvas.offsetWidth;
       //canvas.height = canvas.offsetHeight;
       //The below code is required in order to fix the issue with the resizing on reload
       canvas.width = 1540;
       canvas.height = 760;

var xg = 250;
var yg = 550;
var x = -150;
var y = 100;
var xb = -950;
var yb = 300;
var xc = 1350;
var yc = 630;
var dx = 1.2;
var dy = 0;
var xo = 950;
var yo = 510;
var dox = 1.2;
var doy = 0.2;
var xob = 950;
var yob= 510;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var snakeEnergy = 100;
var fM = document.getElementById("hit");
var winM = document.getElementById("win");
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

/* Adapted from https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard */                            
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
    if(event.keyCode == 40) {
    	downPressed = true;
    }
    else if(event.keyCode == 38) {
    	upPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 40) {
    	downPressed = false;
    }
    else if(event.keyCode == 38) {
    	upPressed = false;
    }
}

function drawSnake() {
    if (snakeEnergy > 0) {
        ctx.drawImage(snakeImg, 950, 455, 255, 255); 
        requestAnimationFrame(drawSnake); 
    }
}

function drawGold() {
    ctx.drawImage(goldImg, 1220, 535, 255, 185);
    requestAnimationFrame(drawGold); 
}

function drawObstacle() {
    if (snakeEnergy > 0) {
       ctx.beginPath();
       ctx.arc(xo, yo, 15, 0, 2 * Math.PI);
       ctx.fillStyle = "#8B0000";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();
       
       ctx.beginPath();
       ctx.arc(xob, yob, 15, 0, 2 * Math.PI);
       ctx.fillStyle = "#8B0000";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();
       
       ctx.font = "30px Arial";
       ctx.strokeText("Energy: " + snakeEnergy, 1000, 460);
           
       requestAnimationFrame(drawObstacle);
       
       if (instructionsBar === false && hitBar === false) { 
            xo -= dox;
            yo -= doy;
       
            //Wait two (2) seconds before allowing the 2nd obstacle to move
            setTimeout(function(){
                    xob -= dx;
                    yob -= dy;
            }, 2000);
       
            //xo yo = obstacle || xg yg = Humpty Dumpty 85 - width, 110 - height
            //The below code detects if the obstacle/circle is touching Humpty Dumpty/the ellipse 
            if (xg < xo + 10 && xg + 85 > xo && yg < yo + 115 && yg + 110 > yo){
                    if (fM.style.display === "none") {
                        fM.style.display = "block";
                        hitBar = true;
                    }
             }
            else if (xg < xob + 10 && xg + 85 > xob && yg < yob + 115 && yg + 110 > yob){
                    if (fM.style.display === "none") {
                        fM.style.display = "block";
                        hitBar = true;
                    }
            }          

            //Reset the obstacles/circles to their default position
            while (Math.abs(xo) <= 1) {
                 xo = 950;
                 yo = 510;
                 doy = 0.2;
                 snakeEnergy -= 10;
            }
       
            while (Math.abs(xob) <= 1) {
                 xob = 950;
            }
       }
    }
}

//This function draws the ground, together with the stones using canvas
function drawGround() {
       //Ground
       ctx.beginPath();
       ctx.rect(0, 680, 1540, 100);
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

       //Pupils
       ctx.beginPath();
       ctx.arc(xg - 7, yg - 25, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "black";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

       ctx.beginPath();
       ctx.arc(xg + 63, yg - 25, 7, 0, 2 * Math.PI);
       ctx.fillStyle = "black";
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
        ctx.quadraticCurveTo(xg + 15, yg + 55, xg - 25, yg + 30);
        ctx.stroke();
        ctx.restore();

    if (snakeEnergy > 0) {

    if(downPressed) {
        yg +=2.5;
    }
    else if(upPressed) {
        yg -= 2.5;
    }

    if (Math.abs(yg) <= 350) 
    {
        yg = 350;
    }
    else if (Math.abs(yg) >= 600) 
    {
        yg = 600;
    } 
    }
    else if (snakeEnergy === 0) {
            setTimeout(function(){
                xg = 1100;
                yg = 610;
                if (winM.style.display === "none") {
                    winM.style.display = "block";
                }
            }, 2000);
    }
    
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

       //Tree trunk
       ctx.beginPath();
       ctx.rect(0, 290, 130, 390);
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
       ctx.stroke();
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

       //the sun
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.beginPath();
       ctx.arc(800, 150, 80, 0, 2 * Math.PI);
       ctx.fillStyle = "yellow";
       ctx.fill();
       ctx.stroke();
       ctx.closePath();

   //The first cloud
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
    drawBush();
    drawGround();
    drawHumptyDumpty();
    drawSnake();
    drawObstacle();
    drawGold();
}

requestAnimationFrame(draw);

});
