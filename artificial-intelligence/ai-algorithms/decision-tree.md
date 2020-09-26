# Minimax
## Basics 
```javascript
/*

//  Basic graph

*/
```

```pseudo
function minimax(position, depth, maximizingPlayer)
    if depth == 0 or game over in position
        return static evaluation of position

    if maximizingPlayer
        maxEval = -infinity
        for each child of position    // Each possibilities in a single move
            eval = minimax(child, depth - 1, false)
            maxEval = max(maxEval, eval)
        return maxEval
    else
        minEval = +infinity
        for each child of position
            eval = minimax(child, depth - 1, true)
            minEval = min(minEval, eval)
        return minEval

// test
minimax(currentPosition, 3, true)
```

## Alpha-beta Prunning
- $\alpha$
- $\beta$
```pseudo
function minimax_prunning(position, depth, alpha, beta, maximizingPlayer) 
    if depth == 0 or game over in position
        return static evaluation of position
    
    if maximizingPlayer
        maxEval = -infinity
        for each child of position
            eval = minimax(child, depth - 1, alpha, beta, false)
            maxEval =  max(maxEval, eval)
            alpha = max(alpha, eval)
            if beta <= alpha
                break
        return maxEval

    else
        minEval = +infinity
        for each child of position
            eval = minimax(child, depth - 1, alpha, beta, true)
            minEval = min(minEval, eval)
            beta = min(beta, eval)
            if beta <= alpha
                break
        return minEval

// test
minimax(currentPosition, 3, -infinity, +infinity, true)

```

## Resource
- [Algorithms Explained – minimax and alpha-beta pruning](https://www.youtube.com/watch?v=l-hh51ncgDI&t=12s)
    - Very good source
