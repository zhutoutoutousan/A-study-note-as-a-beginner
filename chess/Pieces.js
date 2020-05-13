class Piece {
    constructor(x, y, isWhite, letter, pic) {
        this.matrixPosition = createVector(x, y); // TODO: Learn p5.js
        this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);

        this.taken = false;
        this.white = isWhite;
        this.letter = letter;
        this.pic = pic;
        this.movingThisPiece = false;
        this.value = 0;
    }

    show() {
        if(!this.taken) {
            imageMode(CENTER);
            if (this.movingThisPiece) {
                text(this.letter, mouseX, mouseY);
                image(this.pic, mouseX, mouseY, tileSize * 1.5. tileSize * 1.5);
            }
            else {
                text(this.letter, this.pixelPosition.x, this.pixelPosition.y);
                image(this.pic, this.pixelPosition.x, this.pixelPosition.y, tileSize, tileSize);
            }
        }+
    }

    generateNewBoards(currentBoard) {
        let boards = []; // all boards created from moving this piece
        let moves = this.generateMoves(currentBoard); 
        for(let i = 0; i < moves.length; i++) {
            boards[i] = currentBoard.clone();
            
        }
    }
}