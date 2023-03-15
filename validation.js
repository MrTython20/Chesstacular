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

    // En Passant



    // Promotion







}

function knightValidation(initialSpace, newSpace, pieceType) {

    // Check if knight is moving in L pattern
    if (Math.abs((parseInt(newSpace[0])) - parseInt(initialSpace[0])) === 1 && Math.abs((parseInt(newSpace[1])) - parseInt(initialSpace[1])) === 2)
    {return true}
    
    else if (Math.abs((parseInt(newSpace[0])) - parseInt(initialSpace[0])) === 2 && Math.abs((parseInt(newSpace[1])) - parseInt(initialSpace[1])) === 1)
    {return true}

    else {return false}
}

function bishopValidation(initialSpace, newSpace, pieceType) {
    startingX = parseInt(initialSpace[0])
    startingY = parseInt(initialSpace[1])

    endingX = parseInt(newSpace[0])
    endingY = parseInt(newSpace[1])

    xDifference = endingX - startingX
    yDifference = endingY - startingY

    // Verify bishop moving in a diagonal pattern
    if (Math.abs(xDifference) !== Math.abs(yDifference)) {
        return false
    }

    // Check not taking self
    if (startingX === endingX && startingY === endingY) {
        return false
    }

    if (!IsDiagonalPath(startingX, startingY, xDifference, yDifference)) {
        return false
    }

    newSpaceElement = document.getElementById(`${endingX}${endingY}`)
    
    // Check not taking piece of same color
    if (pieceType[0] === newSpaceElement.innerText[0]) {
        return false
    }

    return true
}

function checkBishopDiagonalPath(startingX, startingY, xDifference, yDifference) {
    xDirection = Math.sign(xDifference)
    yDirection = Math.sign(yDifference)

    for (i = 1; i < Math.abs(xDifference); i++) {
        passingX = startingX + (i * xDirection)
        passingY = startingY + (i * yDirection)
        
        passingSpace = document.getElementById(`${passingX}${passingY}`)
       
        if (passingSpace.innerText != "") {
            return false
        }
    }

    return true
}

function rookValidation(initialSpace, newSpace, pieceType) {

    if (initialSpace[0] === newSpace[0] && initialSpace[1] === newSpace[1]) {return false}

    if (initialSpace[1] === newSpace[1] && initialSpace[0] < newSpace[0]) { // Rook is moving on x axis right
        for (i = parseInt(initialSpace[0]) + 1; i <= parseInt(newSpace[0]); i++) { // Loop through spaces
            console.log(i, parseInt(newSpace[1]))
            if (document.getElementById(i + newSpace[1]).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[0])) {  // If last space
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {return false} // If own color return false
                }
                else {return false} // Space is not empty and this is not the last space, piece tried to jump, return false
            }
        }
    }

    if (initialSpace[1] === newSpace[1] && initialSpace[0] > newSpace[0]) { // Rook is moving on x axis left
        for (i = parseInt(initialSpace[0]) - 1; i >= parseInt(newSpace[0]); i--) { // Loop through spaces
            if (document.getElementById(i + newSpace[1]).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[0])) {  // If last space
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {return false} // If own color return false
                }
                else {return false} // Space is not empty and this is not the last space, piece tried to jump, return false
            }
        }          
    }
    
    if (initialSpace[0] === newSpace[0] && initialSpace[1] < newSpace[1]) { // Rook is moving on y axis forward
        for (i = parseInt(initialSpace[1]) + 1; i <= parseInt(newSpace[1]); i++) { // Loop through spaces
            if (document.getElementById(initialSpace[0] + i).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[1])) {  // If last space
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {return false} // If own color return false
                }
                else {return false} // Space is not empty and this is not the last space, piece tried to jump, return false
            }
        }          
    }

    if (initialSpace[0] === newSpace[0] && initialSpace[1] > newSpace[1]) { // Rook is moving on y axis backward
        for (i = parseInt(initialSpace[1]) - 1; i >= parseInt(newSpace[1]); i--) { // Loop through spaces
            console.log(initialSpace[0], i)
            if (document.getElementById(initialSpace[0] + i).innerText !== "") { // If space is not empty
                if (i === parseInt(newSpace[1])) {  // If last space
                    if (document.getElementById(newSpace[0] + newSpace[1]).innerText[0] === pieceType[0]) {return false} // If own color return false
                }
                else {return false} // Space is not empty and this is not the last space, piece tried to jump, return false
            }
        }          
    }
    
    // Check for rook vertical or horizotal move
    return (parseInt(initialSpace[0]) === parseInt(newSpace[0]) || parseInt(initialSpace[1]) === parseInt(newSpace[1]))        
}

function queenValidation(initialSpace, newSpace, pieceType) {

    return (rookValidation(initialSpace, newSpace, pieceType) || bishopValidation(initialSpace, newSpace, pieceType))
}

function kingValidation(initialSpace, newSpace, pieceType) {

    // Check & CheckMate

    // Castling
}