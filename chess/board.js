class Board {
    constructor() {
        this.whitePieces = [];
        this.blackPieces = [];
        this.score = 0;
        this.setupPieces();
    }

    setupPieces() {
        this.whitePieces.push(new King)
    }

    getPieceAt(x, y) {
        for(let i = 0; i < this.whitePieces.length; i++) {
            if(!this.whitePieces[i].taken && this.whitePieces[i].matrixPosition.x == x && this.whitePieces[i].matrixPosition.y == y) {
                return this.whitePieces[i];
            }
        }
        for(let i = 0; i < this.blackPieces.length; i++) {
            if(!this.blackPieces[i].taken && this.blackPieces[i].matrixPosition.x == x && this.blackPieces[i].matrixPosition.y == y) {
                return this.blackPieces[i];
            }
        }
        return null;
    }
}