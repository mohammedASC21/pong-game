class Paddle {
    constructor() {
        this.width = 200;
        this.height = 35;
        this.color = color(255, 0, 0);
        this.location = createVector((width / 2) - (this.width / 2), height - 35)
        const speed = 8
        this.speed = {
            right: createVector(speed, 0),
            left: createVector(speed * -1, 0)
        }
    }

    display() {
        fill(this.color)
        rect(this.location.x, this.location.y - 15, this.width, this.height)
    }

    move(direction) {
        this.location.add(this.speed[direction])

        if (this.location.x < 0) {
            this.location.x = 0
        } else if (this.location.x + this.width > width) {
            this.location.x = width - this.width
        }
    }
}

class Brick {
    constructor(x, y, r, g, b, size, speed) {
        this.xPos = x;
        this.yPos = y;
        this.redVal = r;
        this.greenVal = g;
        this.blueVal = b;
        this.brickSize = size;
        this.brickSpeed = speed;
    }
}



let ballXPos = 250;
let ballYPos = 250;
let ballXDirection = 1;
let ballYDirection = 1;
let ballXSpeed;
let ballYspeed;




function setup() {
    createCanvas(500, 500);
    background(0)
    noStroke();
    paddle = new Paddle()

    ballXSpeed = 4;
    ballYSpeed = 4;
}


let state = 1;
let state1 = 3;


function state2() {

}

function draw() {
    if (state === 1) {
        background(121, 130, 130);
        let t1 = "Click on start to play"
        textSize(25)
        fill(0)
        text(t1, 180, 220)

        fill(0)
        rect(240, 240, 85, 50);
        fill(255);
        let t = "Start"
        textSize(30)
        fill(255, 0, 0)
        text(t, 250, 250, 85, 50)
    }


    if (state == 2) {
        background(0, 100)
        paddle.display()
        if (keyIsDown(LEFT_ARROW)) {
            paddle.move('left');
        } else if (keyIsDown(RIGHT_ARROW)) {
            paddle.move('right');
        }

        fill(255);
        ellipse(ballXPos, ballYPos, 30, 30)

        ballXPos += ballXSpeed * ballXDirection;
        ballYPos += ballYSpeed * ballYDirection;

        if (ballXPos < 12.5 || ballXPos > 487.5) {
            ballXDirection *= -1;

        }
        if (ballYPos < 12.5) {
            ballYDirection *= -1;

        }
        if (ballXPos + 30 >= this.paddle.location.x &&

            ballXPos - 30 <= this.paddle.location.x + this.paddle.width) {
            if (ballYPos + 30 > this.paddle.location.y) {

                // let x = 0;
                // x = x + 1;
                // console.log(x);


                ballYDirection *= -1;
            }
        }

        //state = 3;
        // if (ballYPos >= this.paddle.location.x + this.paddle.width && ballYPos <= this.paddle.location.x + 20 + this.paddle.width) {
        //     let x = 0;
        //     console.log(x);
        // }


        // if (ballXPos + 30 >= this.paddle.location.x &&
        //     ballXPos - 30 <= this.paddle.location.x + this.paddle.width) {
        //     if (ballYPos + 30 > this.paddle.location.y) {

        //         ballYDirection *= -1;
        //     }

        // }





    }

    if (state1 === 3) {
        if (ballYPos >= 500) {
            clear()
            background(0);
            ballXSpeed = 0;
            ballYSpeed = 0;

            let t = "GAME OVER"
            textSize(50)
            fill(250)
            text(t, 125, 260)

            let t1 = "Click on restart to play"
            textSize(25)
            fill(255)
            text(t1, 145, 350)

            noFill()
            strokeWeight(4);
            stroke(51);
            rect(240, 365, 105, 50);
            let t2 = "Restart"
            textSize(25)
            fill(255, 0, 0)
            text(t2, 250, 400)


        }
    }




}

function mouseClicked() {
    if (mouseX > 240 && mouseX < 240 + 85 && mouseY > 240 && mouseY < 240 + 50 && state === 1) {
        // fill(255)
        // ellipse(245, 245, 10)
        strokeWeight(4);
        stroke(51);
        state = 2;
    }
    // if (state1 === 3) {
    //     state1 = 4;
    // }

}