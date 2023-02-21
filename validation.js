function pawnValidation(initialSpace, newSpace, pieceType) {
    if (pieceType === "Wpawn") {
        // Pawn can move 1 space forward
        if (parseInt(newSpace[1]) === parseInt(initialSpace[1]) + 1) {

            // Pawn cannot move diagonally
            if (parseInt(initialSpace[0]) !== parseInt(newSpace[0])) {moveValid = false}
            else {moveValid = true}

            // Pawn cannot replace existing piece
            if (document.getElementById(newSquareId).innerText !== "") {moveValid = false}
            
            // Pawn can take diagonal opponent
            if (parseInt(newSpace[0]) === parseInt(initialSpace[0]) + 1 || parseInt(newSpace[0]) === parseInt(initialSpace[0]) - 1) {
                if (document.getElementById(newSquareId).innerText[0] === "B") {
                    moveValid = true
                }
                else {moveValid = false}
            }
        }

        // Pawn can move 2 spaces forward on opening move
        else if (parseInt(initialSpace[1]) === 2) {
            // Pawn cannot move diagonally
            if ((parseInt(newSpace[1]) === 4)) {
                if (parseInt(initialSpace[0]) !== parseInt(newSpace[0])) {
                    moveValid = false
                }
                else {moveValid = true}
            }
            else {moveValid = false}
        }
        else {moveValid = false}
    }

    if (pieceType === "Bpawn") {
        // Pawn can move 1 space forward
        if (parseInt(newSpace[1]) === parseInt(initialSpace[1]) - 1) {

            // Pawn cannot move diagonally
            if (parseInt(initialSpace[0]) !== parseInt(newSpace[0])) {moveValid = false}
            else {moveValid = true}

            // Pawn cannot replace existing piece
            if (document.getElementById(newSquareId).innerText !== "") {moveValid = false}
            
            // Pawn can take diagonal opponent
            if (parseInt(newSpace[0]) === parseInt(initialSpace[0]) + 1 || parseInt(newSpace[0]) === parseInt(initialSpace[0]) - 1) {
                if (document.getElementById(newSquareId).innerText[0] === "W") {
                    moveValid = true
                }
                else {moveValid = false}
            }
        }

        // Pawn can move 2 spaces forward on opening move
        else if (parseInt(initialSpace[1]) === 7) {
            // Pawn cannot move diagonally
            if ((parseInt(newSpace[1]) === 5)) {
                if (parseInt(initialSpace[0]) !== parseInt(newSpace[0])) {
                    moveValid = false
                }
                else {moveValid = true}
            }
            else {moveValid = false}
        }
        else {moveValid = false}
    }

    // Return true or false based on above validation
    if (moveValid === true) {return true}
    else {return false}
}