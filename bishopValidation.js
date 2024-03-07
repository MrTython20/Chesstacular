function bishopValidation(initialSpace, newSpace, pieceType) {
    
    startingX = parseInt(initialSpace[0])
    startingY = parseInt(initialSpace[1])
    endingX = parseInt(newSpace[0])
    endingY = parseInt(newSpace[1])
    xDifference = endingX - startingX
    yDifference = endingY - startingY
    newSpaceElement = document.getElementById(`${endingX}${endingY}`)

    // Verify bishop moving in a diagonal pattern
    if (Math.abs(xDifference) !== Math.abs(yDifference)) {
        return false
    }
    // Check not taking self
    if (startingX === endingX && startingY === endingY) {
        return false
    }
    if (!checkBishopDiagonalPath(startingX, startingY, xDifference, yDifference)) {
        return false
    }
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