class Pipe extends GameObject {
    constructor(game: Game, imagePath: string, xCoordinate: number) {
        super(game, imagePath);
        this.position = {
            x:xCoordinate,
            y: Math.floor((Math.random()*(y_max - y_min)) + y_min),
        }
        console.log('y=', this.position.y);
    }

    update():void {
        if(this.position.x <= -75) {
            this.position.x = GAME_WIDTH;
            this.position.y = Math.floor((Math.random()*(y_max - y_min)) + y_min);
            console.log('y=', this.position.y);
        }
        else {
            this.position.x -= 2;
        }

        // console.log('y=', this.position.y);

        this.game.context.drawImage(this.image, this.position.x, this.position.y);          //pipe up
        this.game.context.drawImage(this.image, this.position.x, this.position.y+320+150);  //pipe down

        
    }
}