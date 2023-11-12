let cvs = document.querySelector("#flappybird");
let ctx = cvs.getContext("2d");
let cat = document.createElement('img');
cat.src = "images/CatMini.png";

let burgerMini = document.createElement('img');
burgerMini.src = "images/burgerMini.png";


let grav = 0.2;
let change = 0;
let floor = cvs.height  - burgerMini.height

let pipes_x = [cvs.width];
let pipes_y = [floor];

let xPos = 50;
let yPos = floor;
let jumpHeight = 7;
let delta = 0.4;

let score = 0;
let speed = 2.1;

document.addEventListener('keydown', function(){
    if(change > 0 || yPos != floor)
        return;
    change = jumpHeight;
})


function draw() {
    for (i = 0; i < pipes_x.length; i++) {
        ctx.clearRect(0,0, cvs.width, cvs.height); //очистить холст после каждого фрэйма, чтобы не оставались уже прорисованные изображения
        ctx.drawImage(burgerMini, pipes_x[i], floor);
        
        pipes_x[i] = pipes_x[i] - speed;

        if(pipes_x[i] < -150){
            pipes_x = [cvs.width];
        }
        
        if (pipes_x[i] === 50) {
            pipes_x.push(pipes_x[pipes_x.length - 1] + 250);
            pipes_y.push(floor);
        }
        if (xPos + cat.width >= pipes_x[i] 
            && xPos <= pipes_x[i] + 4 
            && yPos >= pipes_y[i] - jumpHeight + delta )
        {
            pipes_x = [cvs.width];
            pipes_y = [floor];
            score = 0;
            xPos = 50;
            yPos = floor;
            change = 0;
            speed = 2.1;
        }

        score++;

        if(score == speed*1000)
        {
            speed += 0.3;
        }
        
    };
  
    
    ctx.drawImage(cat, xPos, yPos);
    if(yPos - change >= floor){
        yPos = floor;
    }else{
        yPos = yPos - change;
    }
    
    change = change - grav;
    ctx.fillStyle = "#000";
    ctx.font = "24px Arial";
    ctx.fillText("Счет: " + score, 10, cvs.height - 20);
    requestAnimationFrame(draw);
}


draw()