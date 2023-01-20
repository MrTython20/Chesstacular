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

insertImage()



document.querySelectorAll('.lightbox, .darkbox').forEach(square => {
    square.addEventListener('click', function () {
        console.log(1)
        originalSquareId = square.id
        originalSquareText = square.innerText
        console.log("original square text: ", originalSquareText)

        document.querySelectorAll('.lightbox, .darkbox').forEach(newSquare => {
            newSquare.addEventListener('click', function () {
                console.log(2)
                newSquare.innerText = document.getElementById(originalSquareId).innerText
                document.getElementById(originalSquareId).innerText = ""
                console.log("new square id", newSquare.id)
                console.log("new square text", newSquare.innerText)

                insertImage()
            })
        })

    })

})