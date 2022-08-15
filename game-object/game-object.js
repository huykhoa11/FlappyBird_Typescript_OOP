"use strict";
class GameObject {
    constructor(game, imagePath) {
        this.game = game;
        this.image = new Image();
        this.image.src = imagePath;
    }
}
