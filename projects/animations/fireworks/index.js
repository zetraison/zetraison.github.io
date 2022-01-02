import { Firework } from "./firework.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let cw = window.innerWidth;
let ch = window.innerHeight;

canvas.width = cw;
canvas.height = ch;

const colors = ["blue", "green", "red", "yellow", "purple", "white", "orange"];

let frames = 0;
let balls = [];

let update = () => {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,cw,ch);

    if (frames % 5 == 0) {
        balls.push(
            new Firework(cw / 4 + Math.random() * cw / 2, ch, colors[Math.floor(Math.random() * (colors.length - 1))], 1)
        );
    }

    balls.forEach(ball => {
        if (ball.level == 1 && ball.speedY < 0) {
            colors.forEach(color => {
                balls.push(
                    new Firework(ball.x, ball.y, color, 2)
                )
            });
            ball.level = 0;
        }
        if (ball.y > ch) {
            balls.splice(balls.indexOf(ball), 1);
        }
        ball.update();
    });

    frames++;
}

let draw = () => balls.forEach(ball => ball.draw(ctx));

let animate = () => {
    requestAnimationFrame(animate);
    update();
    draw();
}

animate();
