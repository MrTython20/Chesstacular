function knightValidation(initialSpace, newSpace, pieceType) {

    startingX = parseInt(initialSpace[0])
    startingY = parseInt(initialSpace[1])
    endingX = parseInt(newSpace[0])
    endingY = parseInt(newSpace[1])
    xDifference = Math.abs(endingX - startingX)
    yDifference = Math.abs(endingY - startingY)
    newSpaceElement = document.getElementById(`${endingX}${endingY}`)

    // Check that knight moves in L pattern
    if (xDifference === yDifference) {
        return false
    }
    // Check that change in x or y exceeds 0
    if (xDifference === 0 || yDifference === 0) {
        return false
    }
    // Check that change in x or y does not exceed 2
    if (xDifference > 2 || yDifference > 2) {
        return false
    }
    // Check that x does not equal y
    if (Math.abs(xDifference - yDifference) != 1) {
        return false
    }
    // Check not taking piece of same color
    if (pieceType[0] === newSpaceElement.innerText[0]) {
        return false
    }
    // Check that knight doesn't take self
    if (startingX === endingX && startingY === endingY) {
        return false
    }
    return true
}