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
        }
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
        this.pic = isWhite ? images[5] : images[11]
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

        // Attacking
        for(let i = -1; i < 2; i += 2){
            let x = this.matrixPosition.x + i;
            let y = this.white ? this.matrixPosition.y - 1 : this.matrixPosition + 1;
            let attacking = board.getPieceAt(x, y);
            if (attacking && (!this.attackingAllies(x, y, board))) {
                moves.push(createVector(x, y));
            }
        }

        // Regular move
        let x = this.matrixPosition.x;
        let y = this.white ? this.matrixPosition.y - 1 : this.matrixPosition + 1;
        if(!board.isPieceAt(x, y) && this.withinBounds(x, y)) {
            moves.push(createVector(x, y));
        }
        
        // First move
        y = this.white ? y - 1 : y + 1;
        if (this.firstTurn && 
            this.withinBounds(x, y) &&
            !this.moveThroughPieces(x, y, board)
            ) {
                moves.push(createVector(x,y));
        }
        print("pawn", moves);
        return moves;
    }
    clone() {
        let clone = new Pawn(this.matrixPosition.x, this.matrixPosition.y, this.white);
        clone.taken = this.taken;
        clone.firstTurn = this.firstTurn;
        return clone;
    }

    move(x, y, board) {
        let attacking = board.getPieceAt(x, y);
        attacking.taken = !attacking ? true : false;
        this.matrixPosition = createVector(x, y);
        this.pixelPosition = createVector(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2);
        this.firstTurn = false;
    }

    // IsEnPassant(x, y, board){
    // 
    // }
}

class King extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = 'K';
        this.pic = isWhite ? images[0] : images[6];
        this.value = 99;
    }

    canMove(x, y, board) {
        if(this.attackingAllies(x, y, board) || !this.withinBounds(x, y)) {
            return false;
        }
        if (abs(x - this.matrixPosition.x) <= 1 && abs(y - this.matrixPosition.y) <= 1){
            return true;
        }
        return false;
    }

    generateMoves(board) {
        let c_x = this.matrixPosition.x;
        let c_y = this.matrixPosition.y;
        let moves = [];
        let container = new Array(8);
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if ( (i != 0 || j != 0) &&
                     this.withinBounds(c_x+x, c_y+y) &&
                     !this.attackingAllies(c_x+x, c_y+y, board)
                ){
                    moves.push(createVector(x, y))
                }
            }
        }
        return moves;
    }

    clone() {
        let clone = new King(this.matrixPosition.x, this.matrixPosition.y, this.white);
        clone.taken = this.taken;
        return clone;
    }
}

class Bishop extends Piece {
    constructor(x, y, isWhite){
        super(x, y, isWhite);
        this.letter = 'B';
        this.pic = isWhite ? images[2] : images[8];
        this.value = 3;
    }

    canMove(x, y, board) {
        return !this.withinBounds ? false :
               this.attackingAllies(x, y, board) ? false :
               !(abs(x - this.matrixPosition.x) == abs(y - this.matrixPosition.y)) ? false :
               this.moveThroughPieces(x, y, board) ? false : true;
    }


    /*

              WHITE'S PERSPECTIVE

             A  B  C  D  E  F  G  H
        8-0           |  
        7-1           |           *
        6-2  *        |        *
        5-3     *     |     *
        4-4        *  |  *
        3-5  -  -  -  B
        2-6        *     *
        1-7     *           *

        Let's say the coordinate of the bishop is (x, y). In the example above, x = 4, y = 5,
        assuming that we're using the y coordinates during programming. Then the bishop's movement
        has two patterns: Rising and falling.

        From the illustration we know that for a certain position X, the corresponding position for 
        Y of Bishop at (A,B) is 'B - A + X'



    */
    generateMoves(board) {
        let moves = [];
        for (let i = 0; i < 8; i++) {
            let x = i;
            let y = this.matrixPosition.y - (this.matrixPosition.x - i);
            if(
                x != this.matrixPosition.x &&
                this.withinBounds(x, y) &&
                !this.attackingAllies(x, y, board) &&
                !this.moveThroughPieces(x, y, board)
            ){
                moves.push(createVector(x, y));
            }
        }

        for (let i = 0; i < 8; i++) {
            let x = this.matrixPosition.x + (this.matrixPosition.y - i);
            let y = i;
            if(
                x != this.matrixPosition.x &&
                this.withinBounds(x, y) &&
                !this.attackingAllies(x, y, board) &&
                !this.moveThroughPieces(x, y, board)
            ){
                moves.push(createVector(x, y));
            }
        }
    }
    clone() {
        let clone = new Bishop(this.matrixPosition.x, this.matrixPosition.y, this.white);
        clone.taken = this.taken;
        return clone;
    }
}

class Rook extends Piece {
    constructor(x, y, isWhite) {
        super(x, y, isWhite);
        this.letter = "R";
        if (isWhite) {
            this.pic = images[4];
        }
        else{
            this.pic = images[10];
        }
        this.value = 5;
    }
    canMove(x, y, board) {
        if (
            this.withinBounds(x, y) &&
            !this.attackingAllies(x, y, board) &&
            (
                x == this.matrixPosition.x ||
                y == this.matrixPosition.y &&
                !this.moveThroughPieces(x, y, board)
            )
        ){
            return true;
        }            
        return false;
    }

    generateMoves(board) {
        let moves = [];

        let x = i;
        let y = this.matrixPosition.y;
        if(
            x != this.matrixPosition.x &&
            !this.attackingAllies(x, y, board)
        )


    }
}
