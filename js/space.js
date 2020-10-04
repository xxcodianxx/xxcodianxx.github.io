let canvas = document.getElementById("space");
let ctx = canvas.getContext("2d");

let pre_gen = true;

setInterval(draw, 0);
let as = setInterval(addStar, 1);

let speed = 5;

let generate = true;
let stars = [];

let tpos = {'x':0, 'y':0};

function addStar() {
    let star = {
        // 'x': Math.random() * canvas.width,
        'x': 0,
        'y': Math.random() * canvas.height
    };

    stars.push(star);
}

function draw() {
    if (!generate) {
        return
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    stars.forEach(
        function (value, index, array) {
            if ( !(value.x < canvas.width) ) {
                // a star is out of bounds, meaning the end has been reached
                delete array[index];

                if (pre_gen) {
                    speed = 0.1;
                    clearInterval(as);
                    pre_gen = false;

                    let content_div = document.getElementById('content')

                    content_div.className = 'fadeable'
                    content_div.style.display = 'block';
                    setTimeout(function() {
                        content_div.className += ' fade-in'
                    }, 50)
                }

                addStar();
            }

            value.x += speed;
            ctx.rect(value.x, value.y, 2, 2)
        }
    );

    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';


    if (tpos.x < canvas.width) {
        ctx.font = "24px JetBrains Mono";
        ctx.font.fontcolor('#fff6a2')
        ctx.fillText("The cosmic scene is loading, please wait...", tpos.x + 100, canvas.height * 0.5);
        tpos.x += speed;
    }

    ctx.closePath();
    ctx.stroke();
}

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 10;