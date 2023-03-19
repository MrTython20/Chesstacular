
function insertImage() {
    document.querySelectorAll('.lightbox, .darkbox').forEach(square => {
        if (square.innerText.length !== 0) {
            if (square.innerText == "Wpawn" || square.innerText == "Bpawn") 
            {
                square.innerHTML = `${square.innerText} <img class='all-pwn' src="assets/${square.innerText}.png" alt="">`
            }
            else 
            {
                square.innerHTML = `${square.innerText} <img class='all-img' src="assets/${square.innerText}.png" alt="">`
            }
        }
    })
}


function checkMove(initialSpace, newSpace, pieceType) {
    console.log(initialSpace, newSpace, pieceType)
    // Pawn validation
    if (pieceType === "Wpawn" || pieceType === "Bpawn") {
        return (pawnValidation(initialSpace, newSpace, pieceType))
    }
    // Knight validation
    if (pieceType === "Wknight" || pieceType === "Bknight") {
        return (knightValidation(initialSpace, newSpace, pieceType))
    }
    // Bishop validation
    if (pieceType === "Wbishop" || pieceType === "Bbishop") {
        return bishopValidation(initialSpace, newSpace, pieceType)
    }
    // Rook validation
    if (pieceType === "Wrook" || pieceType === "Brook") {
        return (rookValidation(initialSpace, newSpace, pieceType))
    }
    // Queen validation
    if (pieceType === "Wqueen" || pieceType === "Bqueen") {
        return (queenValidation(initialSpace, newSpace, pieceType))
    }
    // King validation
    if (pieceType === "Wking" || pieceType === "Bking") {
        return (kingValidation(initialSpace, newSpace, pieceType))
    }
}

insertImage()

var timesClicked = 0

document.querySelectorAll('.lightbox, .darkbox').forEach(square => {

    square.addEventListener('click', function () {
        timesClicked++
        console.log(timesClicked)
        if (timesClicked == 1) {
            originalSquareId = square.id
            originalSquareText = square.innerText
        }
        if (timesClicked == 2) {
            newSquareId = square.id
            if (checkMove(originalSquareId, newSquareId, originalSquareText)) {
                document.getElementById(newSquareId).innerText = originalSquareText
                document.getElementById(originalSquareId).innerText = ""
                timesClicked = 0
                insertImage()  
            }
            else {
                timesClicked = 0
                console.log("move is invalid")
            }
            
        }

    })

})