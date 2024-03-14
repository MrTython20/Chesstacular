function checkMove(initialSpace, newSpace, pieceType) {
  // Pawn validation
  if (pieceType === "Wpawn" || pieceType === "Bpawn") {
    return pawnValidation(initialSpace, newSpace, pieceType);
  }
  // Knight validation
  if (pieceType === "Wknight" || pieceType === "Bknight") {
    return knightValidation(initialSpace, newSpace, pieceType);
  }
  // Bishop validation
  if (pieceType === "Wbishop" || pieceType === "Bbishop") {
    return bishopValidation(initialSpace, newSpace, pieceType);
  }
  // Rook validation
  if (pieceType === "Wrook" || pieceType === "Brook") {
    return rookValidation(initialSpace, newSpace, pieceType);
  }
  // Queen validation
  if (pieceType === "Wqueen" || pieceType === "Bqueen") {
    return queenValidation(initialSpace, newSpace, pieceType);
  }
  // King validation
  if (pieceType === "Wking" || pieceType === "Bking") {
    return kingValidation(initialSpace, newSpace, pieceType);
  }
}

insertImage();

var timesClicked = 0;

var pieces = setupBoard();

document.querySelectorAll(".lightbox, .darkbox").forEach((square) => {
  square.addEventListener("click", function () {
    timesClicked++;
    if (timesClicked == 1) {
      var originalSquareId = square.id;
      var originalSquareText = square.innerText;
    }
    if (timesClicked == 2) {
      newSquareId = square.id;

      if (checkMove(originalSquareId, newSquareId, originalSquareText)) {
        document.getElementById(newSquareId).innerText = originalSquareText;
        document.getElementById(originalSquareId).innerText = "";
        timesClicked = 0;
        //insertImage();
      } else {
        timesClicked = 0;
      }
    }
  });
});
