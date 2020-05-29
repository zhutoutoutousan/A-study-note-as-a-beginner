class Board {
    constructor() {
        this.whitePieces = [];
        this.blackPieces = [];
        this.score = 0;
        this.setupPieces();
    }

    setupPieces() {
        this.whitePieces.push(new King(4, 7, true));
        this.whitePieces.push(new Queen(3, 7, true));
        this.whitePieces.push(new Bishop(2, 7, true));
        this.whitePieces.push(new Bishop(5, 7, true));
        this.whitePieces.push(new Knight(1, 7, true));
        this.whitePieces.push(new Knight(6, 7, true));
        this.whitePieces.push(new Rook(0, 7, true));
        this.whitePieces.push(new Rook(7, 7, true));        

        this.blackPieces.push(new King(4, 0, true));
        this.blackPieces.push(new Queen(3, 0, true));
        this.blackPieces.push(new Bishop(2, 0, true));
        this.blackPieces.push(new Bishop(5, 0, true));
        this.blackPieces.push(new Knight(1, 0, true));
        this.blackPieces.push(new Knight(6, 0, true));
        this.blackPieces.push(new Rook(0, 0, true));
        this.blackPieces.push(new Rook(7, 0, true));  


        for(let i = 0; i < 8; i++){
            this.whitePieces.push(new Pawn(i, 6, true));
            this.blackPieces.push(new Pawn(i, 1, true));
        }
    }

    isPieceAt(x, y) {

    }

    getPieceAt(x, y) {
        for(let i = 0; i < this.whitePieces.length; i++) {
            if(
                !this.whitePieces[i].taken &&
                this.whitePieces[i].matrixPosition.x == x && 
                this.whitePieces[i].matrixPosition.y == y
                ) {
                return this.whitePieces[i];
            }
        }
        for(let i = 0; i < this.blackPieces.length; i++) {
            if(
                !this.blackPieces[i].taken && 
                this.blackPieces[i].matrixPosition.x == x && 
                this.blackPieces[i].matrixPosition.y == y
            ) {
                return this.blackPieces[i];
            }
        }
        return null;
    }

    isDone() {
        return this.whitePieces[0].taken || this.blackPieces[0].taken;
    }
}