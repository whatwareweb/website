let colors = ["00", "47", "97", "de"];


function getRandomColor() {
    let red = colors[Math.floor(Math.random()* colors.length)];
    let green = colors[Math.floor(Math.random()* colors.length)];
    let blue = colors[Math.floor(Math.random()* colors.length)];
    let color = "#" + red + green + blue;
    return color;
}

oldWidth = 0
oldHeight = 0

function animate() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    if (oldWidth != canvas.width || oldHeight != canvas.height) {
        stars = [];
        oldWidth = canvas.width;
        oldHeight = canvas.height;
    }

    while (stars.length < canvas.width * 0.1) {
        let star = {
            x: Math.random() * (canvas.width - 3),
            y: Math.random() * (canvas.height - 3),
            frame: Math.random() * 16,
            color: getRandomColor()
        };
        stars.push(star);
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].y += 3;
        if (stars[i].y > canvas.height) {
            stars[i].x = Math.random() * (canvas.width - 3),
            stars[i].y = 0,
            stars[i].frame = Math.random() * 16,
            stars[i].color = getRandomColor()
        }

        stars[i].frame += .45;
        if (stars[i].frame > 16) {
            stars[i].frame = 0;
        }

        context.fillStyle = stars[i].color;
        if (stars[i].frame < 8) {
            context.beginPath();
            context.rect(stars[i].x, stars[i].y, 4, 4);
            context.fill();
        }
    }
}

setInterval(() => window.requestAnimationFrame(animate), 16);

let canvas = document.getElementById('starfield');
let context = canvas.getContext('2d');
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
let stars = [];
window.requestAnimationFrame(animate);
