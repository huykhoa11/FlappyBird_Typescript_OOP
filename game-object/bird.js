"use strict";
class Bird extends GameObject {
    constructor(game, imagePath, x, y) {
        super(game, imagePath);
        this.velocity = 1;
        this.position = {
            x: x !== null && x !== void 0 ? x : 100,
            y: y !== null && y !== void 0 ? y : 100,
        };
    }
    update() {
        this.velocity += GAME_GRAVITY;
        this.position.y += this.velocity;
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }
    flap() {
        this.velocity -= FLAP_VELOCITY;
    }
}
