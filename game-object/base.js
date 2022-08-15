"use strict";
class Base extends GameObject {
    constructor(game, imagePath) {
        super(game, imagePath);
        this.position = {
            x: 0,
            y: 400,
        };
    }
    update() {
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }
}
