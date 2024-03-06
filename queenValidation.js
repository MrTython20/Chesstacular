function queenValidation(initialSpace, newSpace, pieceType) {

    return (rookValidation(initialSpace, newSpace, pieceType) || bishopValidation(initialSpace, newSpace, pieceType))
}