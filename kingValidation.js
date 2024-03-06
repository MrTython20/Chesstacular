function kingValidation(initialSpace, newSpace, pieceType) {

    startingX = parseInt(initialSpace[0])
    startingY = parseInt(initialSpace[1])
    endingX = parseInt(newSpace[0])
    endingY = parseInt(newSpace[1])
    xDifference = Math.abs(endingX - startingX)
    yDifference = Math.abs(endingY - startingY)
    newSpaceElement = document.getElementById(`${endingX}${endingY}`)

    if(xDifference > 1) {
        return false
    }
    if(yDifference > 1) {
        return false
    }
    if (xDifference !== 1 && yDifference !== 1) {
        return false
    }
    if (pieceType[0] === newSpaceElement.innerText[0]) {
        return false
    }
    return true
}