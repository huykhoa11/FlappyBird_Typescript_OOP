class Game {
    context!: CanvasRenderingContext2D;
    bird!: Bird;
    bg!: BackGround;
    base!: Base;
    pipe1!: Pipe;
    pipe2!: Pipe;
    score1!: Score;
    // score2!: Score;

    totalScore!: number;
    flag!: boolean;
    gameover!: boolean;
    constructor(id: string) {
        this.totalScore = 0;
        this.flag = true;
        this.gameover = false;

        const canvas = document.getElementById('id') as HTMLCanvasElement;
        this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvas.width = GAME_WIDTH;
        canvas.height = GAME_HEIGHT;

        canvas.addEventListener('click', ()=> {
            this.bird.image.src = './assets/img/redbird-upflap.png';
            this.bird.flap();
            setTimeout(() => this.bird.image.src = './assets/img/redbird-downflap.png', 200);
        })
    }

    #updateFrame():void {
        this.context.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT);

        this.bg.update();
        this.bird.update();
        this.pipe2.update();
        this.pipe1.update();
        this.score1.update(this.totalScore);
        // this.score2.update();
        this.base.update();

        this.checkCollision();
        if(this.gameover === false) {setTimeout(()=> this.#updateFrame(), 1000/GAME_FPS);}
    }

    setBird(bird: Bird) {
        this.bird = bird;
    }

    setBackGround(bg: BackGround): void {
        this.bg = bg;
    }

    setBase(base: Base):void {
        this.base = base;
    }

    setPipe1(pipe: Pipe):void {
        this.pipe1 = pipe;
    }

    setPipe2(pipe: Pipe):void {
        this.pipe2 = pipe;
    }

    setScore1(score: Score):void {
        this.score1 = score;
    }

    // setScore2(score: Score):void {
    //     this.score2 = score;
    // }

    checkCollision():void {
        const birdX = this.bird.position.x;
        const birdY = this.bird.position.y;

        const pipe1_X = this.pipe1.position.x;
        const pipe1_Y = this.pipe1.position.y;
        const pipe2_X = this.pipe2.position.x;
        const pipe2_Y = this.pipe2.position.y;

        const base_Y = this.base.position.y;

        if (birdX > pipe1_X-36 && birdX < pipe1_X+PipeWidth && birdY > pipe1_Y && birdY < pipe1_Y+PipeHeight ||
            birdX > pipe2_X-36 && birdX < pipe2_X+PipeWidth && birdY > pipe2_Y && birdY < pipe2_Y+PipeHeight) {
            console.log('GAMEOVER COLLISION PIPE');
            this.gameover = true;
        }
        else if(birdY >= base_Y-28) {
            console.log('GAMEOVER COLLISION BASE');
            this.gameover = true;
        }
        else if(birdX > pipe1_X+PipeWidth || birdX > pipe2_X+PipeWidth) {this.flag = true;}

        else if(birdX > pipe1_X && birdX < pipe1_X+PipeWidth ||
                birdX > pipe2_X && birdX < pipe2_X+PipeWidth) {
            if(this.flag === true) {
                this.flag = false;
                this.totalScore += 5;
                console.log('totalScore' ,this.totalScore, 'flag', this.flag);
            }
        }
    }

    start():void {
        this.#updateFrame();
    }
}