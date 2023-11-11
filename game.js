let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");
let bird = document.createElement('img');
bird.src = "images/bird.png";
let bg = document.createElement('img');
bg.src = "images/bg.png";
let pipeBottom = document.createElement('img');
pipeBottom.src = "images/pipeBottom.png";


let fg = document.createElement('img');
fg.src = "images/fg.png";

let grav = 0.3;
let change = 5;

let gap = 110;
let pipes_x = [cvs.clientWidth, cvs.width + 150];
let pipes_y = [0, -100];

let x = 280;
let y = 0;

let xPos = 50;
let yPos = 250;

let score = 0;

document.addEventListener('keydown', function(){
    change = 4;
})



function draw() {
    ctx.drawImage(bg, 0, 0);
    for (i = 0; i < pipes_x.length; i++) {
        ctx.drawImage(pipeUp, pipes_x[i], pipes_y[i]);
        ctx.drawImage(pipeBottom, pipes_x[i], pipes_y[i] + pipeUp.height + gap);
        ctx.drawImage(fg, 0, 400);
        
        pipes_x[i] = pipes_x[i] - 2;
        
        
        
        if (pipes_x[i] === 50) {
            pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
            pipes_y.push(Math.floor(Math.random() * pipeUp.height) - pipeUp.height);
        }
        if (xPos + bird.width >= pipes_x[i] 
            && xPos <= pipes_x[i] + pipeUp.width 
            && (yPos <= pipes_y[i] + pipeUp.height && yPos + bird.height >= cvs.height - fg.height))
        {
            pipes_x = [cvs.width];
            pipes_y = [0];
            score = 0;
            xPos = 10;
            yPos = 150;
            change = 5;
        }
        if (pipes_x[i] < 5) {
            score++;
            }

        if (grav <= change) {
            bird.src = 'images/bird_up.png'
        }
        else{
            bird.src = 'images/bird_down.png'
        }

        
    };
    
    ctx.drawImage(bird, xPos, yPos);
    yPos = yPos - change;
    change = change - grav;
    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20   );
    requestAnimationFrame(draw);
}


draw()