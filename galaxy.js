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

    this.radian = Math.random() * 2 * Math.PI;
    this.velocity = 0.002;

    this.update = () => {

        this.radian += this.velocity;
        this.y = y + Math.sin(this.radian) * 100 * rate;
        this.x = x + Math.cos(this.radian) * 300 * rate;
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
        canvas.height / 2, 15, 0, 'white'));
    for (let i = 1; i < 7; i++) {
        particles.push(new particle((canvas.width / 2),
            (canvas.height / 2), 15, 0.003 * i, 'white'));
    }

    for (let i = 1; i <= 1000; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 1.8 - i / 1000, 0.003 * i, 'white'));
    }
    for (let i = 100; i <= 1000; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 1.5, 0.002 * i, 'white'));
    }

    for (let i = 1; i <= 1000; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 2, 0.001 * i, 'white'));
    }

    for (let i = 1; i <= 300; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 2, 0.001 * i, 'white'));
    }
    
        for (let i = 1; i <= 500; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 2, 0.001 * i, 'white'));
    }
        for (let i = 1; i <= 500; i++) {
        particles.push(new particle(canvas.width / 2,
            canvas.height / 2, 2, 0.001 * i, 'white'));
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





// var canvas = document.querySelector('#canvas');

// var c = canvas.getContext('2d');


// canvas.height = window.innerHeight;

// canvas.width = window.innerWidth;


// function particle(x, y, radius, rate, color) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.rate = rate;

//     this.radian = Math.random() * 2 * Math.PI;
//     this.velocity = 0.008;

//     this.update = () => {

//         this.radian += this.velocity;
//         this.y = y + Math.sin(this.radian) * 100 * rate;
//         this.x = x + Math.cos(this.radian) * 300 * rate;
//         this.draw();
//     };

//     this.draw = () => {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0,
//             Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();
//     };
// }



// let particles;


// function init() {
//     particles = []
//     particles.push(new particle(canvas.width / 2,
//         canvas.height / 2, 15, 0, 'white'));
//     for (let i = 1; i <= 1000; i++) {
//         particles.push(new particle(canvas.width / 2,
//             canvas.height / 2, 1.8 - i / 1000, 0.003 * i, 'white'));
//     }
//     for (let i = 100; i <= 1000; i++) {
//         particles.push(new particle(canvas.width / 2,
//             canvas.height / 2, 1.5, 0.002 * i, 'white'));
//     }

//     for (let i = 1; i <= 1000; i++) {
//         particles.push(new particle(canvas.width / 2,
//             canvas.height / 2, 2, 0.001 * i, 'white'));
//     }
//     // console.log(particles);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, canvas.width, canvas.height);

//     particles.forEach(particle => {
//         particle.update();

//     });
// }

// init();
// animate();





