
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
        if (pawnValidation(initialSpace, newSpace, pieceType)) {return true}
    }
    // Knight validation
    if (pieceType === "Wknight" || pieceType === "Bknight") {
        if (knightValidation(initialSpace, newSpace, pieceType)) {return true}
    }
    // Bishop validation
    // if (pieceType === "Wbishop" || pieceType === "Bbishop") {
    //     if (bishopValidation(initialSpace, newSpace, pieceType)) {return true}
    // }
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