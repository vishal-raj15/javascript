var canvas = document.querySelector('#canvas');

var c = canvas.getContext('2d');

canvas.height = window.innerHeight;

canvas.width = window.innerWidth;


function particle(x, y, radius, rate, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.rate = rate;
    this.radian = Math.PI;
    this.velocity = 0.05;

    this.update = () => {

        this.radian += this.velocity * rate;
        this.y = y + Math.sin(this.radian) * 100 * rate;
        this.x = x + Math.cos(this.radian) * 310 * rate;
        this.draw();
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0,
            Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    };
}

let particles;

function init() {
    particles = []
    particles.push(new particle(canvas.width / 2,
        canvas.height / 2, 5, 0, 'red'));
    for (let i = 1; i <= 10; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 3.2, i / 5, 'white'));
    }
    // console.log(particles);
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();

    });
}

init();
animate();




