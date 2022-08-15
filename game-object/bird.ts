class Bird extends GameObject {
    velocity:number = 1;
    constructor(game: Game, imagePath: string, x?:number, y?:number) {
        super(game, imagePath);
        this.position = {
            x: x ?? 100,
            y: y ?? 100,
        }
    }

    update(): void {

        this.velocity += GAME_GRAVITY; 
        this.position.y += this.velocity;
        this.game.context.drawImage(this.image, this.position.x, this.position.y);
    }

    flap(): void {
        this.velocity -= FLAP_VELOCITY;
    }
}