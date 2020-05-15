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

    withinBounds(x, y) {
        if (x >= 0 && y >= 0 && x < 8 && y < 8){
            return true;
        }
        return false
    }

    attackingAllies(x, y, board){
        let attacking = board.getPieceAt(x, y);
        if(attacking != null) {
            if(attacking.white == this.white){
                return true;
            }
        }
        return false;
    }

    canMove(x, y, board) {
        if(!this,withinBounds(x, y)){
            return false;
        }
        return true;
    }

    moveThroughPieces(x, y, board) {
        let stepDirectionX = x - this.matrixPosition.x;
        stepDirectionX = stepDirectionX > 0 ? 1
                         : stepDirectionX < 0 ? -1
                         : undefined;
        let stepDirectionY = y - this.matrixPosition.y;
        stepDirectionY = stepDirectionY > 0 ? 1
                         : stepDirectionY < 0 ? -1
                         : undefined;
        let tempPos = createVector(this.matrixPosition.x, this.matrixPosition.y);
        tempPos.x += stepDirectionX;
        tempPos.y += stepDirectionY;
        while (tempPos.x != x || tempPos.y != y){
            if(board.getPieceAt(tempPos.x, tempPos.y) != null) {
                return true;
            }
            tempPos.x += stepDirectionX;
            tempPos.y += stepDirectionY;
        }
        return false;
    }

}

class Pawn extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "p";
        this.firstTurn = true;
        this.value = 1;
        if (isWhite) {
            this.pic = images[5];
        }
        else {
            this.pic = images[11];
        }   
    }

    canMove(x, y, board) {
        if(!this.withinBounds(x, y)) {
            return false;
        }
        if(this.attackingAllies(x, y, board)){
            return false;
        }

        // If it is attacking the opponent
        let attacking = board.isPieceAt(x, y);
        if(attacking) {
            if (abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y)
                && (
                    (this.white && (y - this.matrixPosition.y) == -1)
                    || (!this.white && (y - this.matrixPosition.y) == 1)
                    )
                ){
                    this.firstTurn = false;
                    return true;
                }
            return false;
        }
        if(x != this.matrixPosition.x) {
            return false;
        }
        if ((this.white && y - this.matrixPosition.y == -1)
             || (!this.white && y- this.matrixPosition.y == 1)){
                 this.firstTurn = false;
                 return true;
             }
        if (this.firstTurn && ((this.white && y - this.matrixPosition.y == -2)
            || (!this.white && y - this.matrixPosition.y == 2))){
            if (this.moveThroughPieces(x, y, board)) {
                return false;
            }

            this.firstTurn = false;
            return true;
        }
        return false;
    }


    generateMoves(board) {
        let moves = [];

        for(let i = -1; i < 2; i += 2){

        }
    }
    clone() {
        let clone = new 
    }

    IsEnPassant(x, y, board){

    }
}