const canvans = document.querySelector('canvas');
const c = canvans.getContext('2d');

canvans.width = 1024
canvans.height = 576

c.fillRect(0, 0, canvans.width, canvans.height);

const gravity = 0.2

// create class
class Sprite {
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        this.draw()
        
        this.position.y += this.velocity.y

        if (this.position.y +this.height + this.velocity.y >= canvans.height) {
            this.velocity.y = 0
        } else this.velocity.y += gravity
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    }
})

player.draw()

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    }
})

enemy.draw()

console.log(player)

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvans.width, canvans.height)
    player.update()
    enemy.update()
}

animate()