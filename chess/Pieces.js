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
            if ()
        }
    }

}